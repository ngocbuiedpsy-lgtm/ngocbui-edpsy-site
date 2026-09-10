/* ==========================================================================
   EDIT MODE

   Loads only when the address ends with ?edit
   Visitors to the normal site never download this file.

   What it does: makes every piece of text on the page clickable so you can
   type over it. When you click Save it gives you back a content.js file with
   your changes in it, ready to drop into GitHub.

   It edits your original content.js as text, changing only the sentences you
   actually touched, so your comments, spacing and everything else stay put.
   Quote marks are escaped automatically, so the typo that blanked the site
   cannot happen from here.
   ========================================================================== */

(function () {
  "use strict";

  var source = null;      // the original content.js, as text
  var edits = {};         // path -> { before, after }
  var bar, count, saveBtn;

  /* ---------- find every editable piece of text ------------------------ */
  function fields() {
    return Array.prototype.slice.call(document.querySelectorAll("[data-path]"));
  }

  function original(el) {
    // what the text was before this editing session
    return el.getAttribute("data-original");
  }

  /* ---------- toolbar --------------------------------------------------- */
  function buildBar() {
    bar = document.createElement("div");
    bar.id = "editBar";
    bar.innerHTML =
      '<div class="eb-left">' +
        '<strong>Editing</strong>' +
        '<span id="ebCount">no changes yet</span>' +
      "</div>" +
      '<div class="eb-right">' +
        '<button type="button" id="ebHelp" class="eb-ghost">How this works</button>' +
        '<button type="button" id="ebUndo" class="eb-ghost">Undo all</button>' +
        '<button type="button" id="ebSave" class="eb-save" disabled>Save changes</button>' +
        '<a class="eb-ghost" id="ebExit" href="?">Leave editing</a>' +
      "</div>";
    document.body.appendChild(bar);
    count = document.getElementById("ebCount");
    saveBtn = document.getElementById("ebSave");

    saveBtn.addEventListener("click", save);
    document.getElementById("ebUndo").addEventListener("click", undoAll);
    document.getElementById("ebHelp").addEventListener("click", help);
  }

  function refresh() {
    var n = Object.keys(edits).length;
    count.textContent = n === 0 ? "no changes yet"
      : n === 1 ? "1 change" : n + " changes";
    saveBtn.disabled = n === 0;
    document.body.classList.toggle("has-edits", n > 0);
  }

  /* ---------- make things editable -------------------------------------- */
  function arm() {
    fields().forEach(function (el) {
      el.setAttribute("data-original", el.textContent);
      el.setAttribute("contenteditable", "plaintext-only");
      el.setAttribute("spellcheck", "true");
      el.classList.add("editable");

      // Enter should not create new blocks. Blur instead.
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter") { e.preventDefault(); el.blur(); }
        if (e.key === "Escape") {
          el.textContent = original(el);
          delete edits[el.getAttribute("data-path")];
          el.classList.remove("changed");
          refresh(); el.blur();
        }
      });

      el.addEventListener("input", function () { track(el); });
      el.addEventListener("blur", function () {
        // collapse any stray whitespace a paste may have brought in
        var clean = el.textContent.replace(/\s+/g, " ").trim();
        if (clean !== el.textContent) el.textContent = clean;
        track(el);
      });
    });
  }

  function track(el) {
    var path = el.getAttribute("data-path");
    var before = original(el);
    var after = el.textContent;
    if (after === before) {
      delete edits[path];
      el.classList.remove("changed");
    } else {
      edits[path] = { before: before, after: after };
      el.classList.add("changed");
    }
    refresh();
  }

  function undoAll() {
    if (!confirm("Put every sentence back the way it was?")) return;
    fields().forEach(function (el) {
      el.textContent = original(el);
      el.classList.remove("changed");
    });
    edits = {};
    refresh();
  }

  /* ---------- saving ----------------------------------------------------- */

  // Turn a value into exactly the JavaScript string literal the file uses.
  function literal(v) { return JSON.stringify(v); }

  function save() {
    if (!source) {
      alert("I could not read content.js, so I cannot build the new file.\n\n" +
            "This usually means the page was opened straight from your hard " +
            "drive. Edit mode needs the site to be running on a web address, " +
            "so use it on your live site.");
      return;
    }

    var out = source, applied = [], failed = [], ambiguous = [];

    Object.keys(edits).forEach(function (path) {
      var e = edits[path];
      var find = literal(e.before);
      var hits = out.split(find).length - 1;

      if (hits === 0) { failed.push(path); return; }
      if (hits > 1) ambiguous.push(path);

      out = out.replace(find, literal(e.after));
      applied.push(path);
    });

    if (failed.length) {
      alert("I could not place " + failed.length + " of your changes:\n\n" +
            failed.join("\n") +
            "\n\nThe rest are fine and are in the file. This can happen if " +
            "content.js was edited elsewhere since this page loaded. Refresh " +
            "and redo those ones.");
    }
    if (ambiguous.length) {
      alert("Heads up: " + ambiguous.length + " of your edits matched text " +
            "that appears more than once in the file, so I changed the first " +
            "one. Please check these after uploading:\n\n" + ambiguous.join("\n"));
    }

    var blob = new Blob([out], { type: "text/javascript" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "content.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 4000);

    alert("Saved " + applied.length + " change" + (applied.length === 1 ? "" : "s") +
          " into content.js, and it is now in your Downloads folder.\n\n" +
          "Next: open your repository on GitHub, click Add file, then Upload " +
          "files, and drag this content.js in. It replaces the old one. Your " +
          "site updates about 30 seconds after you commit.");
  }

  function help() {
    alert(
      "EDITING YOUR SITE\n\n" +
      "1. Click any sentence and type over it. Changed text turns green.\n" +
      "2. Press Escape while typing to put one sentence back.\n" +
      "3. Click Save changes. A new content.js downloads.\n" +
      "4. Drag that file into your GitHub repository to replace the old one.\n\n" +
      "You can type any punctuation you like, including \" quote marks. " +
      "They are made safe automatically.\n\n" +
      "This edits words only. For layout, colours or new sections, ask Claude.\n\n" +
      "Nothing changes on the live site until you upload the file."
    );
  }

  /* ---------- boot -------------------------------------------------------- */
  function boot() {
    buildBar();
    arm();
    refresh();

    fetch("content.js", { cache: "no-store" })
      .then(function (r) { return r.ok ? r.text() : null; })
      .then(function (t) {
        source = t;
        if (!t) count.textContent = "cannot read content.js, saving is off";
      })
      .catch(function () {
        count.textContent = "cannot read content.js, saving is off";
      });

    window.addEventListener("beforeunload", function (e) {
      if (Object.keys(edits).length) { e.preventDefault(); e.returnValue = ""; }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
