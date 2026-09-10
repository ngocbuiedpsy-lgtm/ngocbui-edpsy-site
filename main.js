/* ==========================================================================
   Puts the words from content.js into the page.
   You should not need to edit this file.

   Every section is wrapped so that if one part ever fails, the rest of the
   page still renders. A single problem can never blank the whole site.
   ========================================================================== */

(function () {
  "use strict";

  var C = (typeof window !== "undefined" && window.CONTENT) ||
          (typeof CONTENT !== "undefined" ? CONTENT : null);

  if (!C) {
    document.documentElement.setAttribute("data-content-missing", "true");
    return;
  }

  // --- helpers, all null-safe --------------------------------------------
  function $(id) { return document.getElementById(id); }

  function text(id, str, path) {
    var el = $(id);
    if (el && str != null) {
      el.textContent = str;
      if (path) el.setAttribute("data-path", path);
    }
  }

  function html(id, str) {
    var el = $(id);
    if (el && str != null) el.innerHTML = str;
  }

  // marks a repeated field so the editor can find it again
  function dp(path) { return ' data-path="' + esc(path) + '"'; }

  function attr(id, name, value) {
    var el = $(id);
    if (el && value != null) el[name] = value;
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function list(v) { return Array.isArray(v) ? v : []; }

  // Run a section. If it throws, log it and carry on with the next one.
  function section(name, fn) {
    try { fn(); }
    catch (err) {
      if (window.console && console.warn) {
        console.warn("[site] section '" + name + "' did not render:", err);
      }
    }
  }

  var DL_ICON =
    '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true">' +
    '<path d="M8 1.5v9m0 0L4.5 7M8 10.5 11.5 7M2 13h12" stroke="currentColor" ' +
    'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  // --- meta ---------------------------------------------------------------
  section("meta", function () {
    if (!C.meta) return;
    if (C.meta.pageTitle) document.title = C.meta.pageTitle;
    text("brandName", C.meta.name, "meta.name");
  });

  // --- hero ---------------------------------------------------------------
  section("hero", function () {
    var H = C.hero || {};
    text("heroL1", H.line1, "hero.line1");
    text("heroL2", H.line2, "hero.line2");
    text("heroSub", H.subtitle, "hero.subtitle");
    text("portraitCap", H.photoCaption, "hero.photoCaption");
  });

  // --- hello --------------------------------------------------------------
  section("hello", function () {
    var H = C.hello || {};
    text("helloTitle", H.title, "hello.title");
    html("helloBody", list(H.paragraphs).map(function (p, i) {
      return "<p" + dp("hello.paragraphs." + i) + ">" + esc(p) + "</p>";
    }).join(""));
  });

  // --- teaching -----------------------------------------------------------
  section("teaching", function () {
    var T = C.teaching || {};
    text("teachTitle", T.title, "teaching.title");
    text("teachIntro", T.intro, "teaching.intro");

    text("teachListTitle", T.listTitle, "teaching.listTitle");
    html("teachList", list(T.list).map(function (it, i) {
      return '<div class="card"><h3' + dp("teaching.list." + i + ".title") + ">" + esc(it.title) +
        "</h3><p" + dp("teaching.list." + i + ".body") + ">" + esc(it.body) + "</p></div>";
    }).join(""));

    text("lumTitle", T.lumTitle, "teaching.lumTitle");
    text("lumBody", T.lumBody, "teaching.lumBody");
    text("testTitle", T.testimonialsTitle, "teaching.testimonialsTitle");
    html("quotes", list(T.testimonials).map(function (q, i) {
      return '<div class="quote"><blockquote' + dp("teaching.testimonials." + i + ".quote") +
             ">&ldquo;" + esc(q.quote) + "&rdquo;</blockquote><cite" +
             dp("teaching.testimonials." + i + ".who") + ">" + esc(q.who) + "</cite></div>";
    }).join(""));
  });

  // --- workshops & talks ---------------------------------------------------
  section("talks", function () {
    var K = C.talks || {};
    text("talksTitle", K.title, "talks.title");
    text("talksIntro", K.intro, "talks.intro");
    html("talksList", list(K.items).map(function (t, i) {
      var img = t.image
        ? '<img src="' + esc(t.image) + '" alt="' + esc(t.imageAlt || "") + '" loading="lazy">'
        : "";
      var dl = t.download
        ? '<a class="btn" href="' + esc(t.download) + '" download>' + DL_ICON +
          esc(t.downloadLabel || "Download") + "</a>"
        : "";
      var b = "talks.items." + i + ".";
      return '<article class="talk' + (t.image ? " has-img" : "") + '"><div>' +
        '<p class="date"' + dp(b + "date") + ">" + esc(t.date) + "</p>" +
        "<h3" + dp(b + "title") + ">" + esc(t.title) + "</h3>" +
        '<p class="where"' + dp(b + "where") + ">" + esc(t.where) + "</p>" +
        "<p" + dp(b + "body") + ">" + esc(t.body) + "</p>" + dl + "</div>" + img + "</article>";
    }).join(""));
  });

  // --- materials ----------------------------------------------------------
  section("materials", function () {
    var M = C.materials || C.wellbeing || {};
    var MK = C.materials ? "materials" : "wellbeing";

    // Nothing to show? Then the section and its menu link stay away entirely,
    // rather than leaving an empty coloured band on the page. Add a
    // materials: { ... } block back into content.js and both return.
    if (!M.title && !list(M.items || M.projects).length) {
      var sec = $("materials");
      if (sec) sec.remove();
      var navLink = document.querySelector('nav a[href="#materials"]');
      if (navLink && navLink.parentNode) navLink.parentNode.remove();
      return;
    }

    text("matTitle", M.title, MK + ".title");
    text("matIntro", M.intro, MK + ".intro");
    html("matList", list(M.items || M.projects).map(function (m, i) {
      var b = MK + (M.items ? ".items." : ".projects.") + i + ".";
      var link = m.url
        ? '<p><a href="' + esc(m.url) + '">' + esc(m.linkLabel || "Open it") + "</a></p>"
        : "";
      var badge = m.status ? '<span class="badge"' + dp(b + "status") + ">" + esc(m.status) + "</span>" : "";
      return '<div class="card">' + badge + "<h3" + dp(b + "title") + ">" + esc(m.title) +
        "</h3><p" + dp(b + "body") + ">" + esc(m.body) + "</p>" + link + "</div>";
    }).join(""));
    text("matNote", M.note, MK + ".note");
  });

  // --- research -----------------------------------------------------------
  section("research", function () {
    var R = C.research || {}, P = R.paper || {};
    text("resTitle", R.title, "research.title");
    text("resIntro", R.intro, "research.intro");
    text("paperTitle", P.title, "research.paper.title");

    // bold Ngoc's name in the author list, however it is written
    if (P.authors) {
      html("paperAuthors", esc(P.authors).replace(/(Ngoc\s+A?\.?\s*Bui)/i, "<b>$1</b>"));
    }
    text("paperJournal", P.journal, "research.paper.journal");

    attr("paperDoi", "href", P.doi);
    text("paperDoi", P.doiLabel, "research.paper.doiLabel");
    attr("paperDoi", "rel", "noopener");
    attr("paperDoi", "target", "_blank");

    text("paperSummary", P.summary, "research.paper.summary");
    text("funding", P.funding, "research.paper.funding");

    text("otherTitle", R.otherTitle, "research.otherTitle");
    html("otherList", list(R.other).map(function (o, i) {
      var b = "research.other." + i + ".";
      var link = o.url
        ? '<p><a href="' + esc(o.url) + '" target="_blank" rel="noopener">' +
          esc(o.linkLabel || "Visit") + "</a></p>"
        : "";
      return '<div class="card"><h3' + dp(b + "title") + ">" + esc(o.title) + "</h3><p" +
        dp(b + "body") + ">" + esc(o.body) + "</p>" + link + "</div>";
    }).join(""));
  });

  // --- app ----------------------------------------------------------------
  section("app", function () {
    var A = C.app || {};
    text("appTitle", A.title, "app.title");
    text("appSubtitle", A.subtitle, "app.subtitle");
    html("appIntro", list(A.intro).map(function (p, i) {
      return "<p" + dp("app.intro." + i) + ">" + esc(p) + "</p>";
    }).join(""));

    text("modesTitle", A.modesTitle, "app.modesTitle");
    html("modes", list(A.modes).map(function (m, i) {
      var b = "app.modes." + i + ".";
      return '<div class="app-mode">' +
        '<div class="phone"><img src="' + esc(m.image) + '" alt="' +
        esc(m.alt || "") + '" loading="lazy"></div>' +
        "<div><h3" + dp(b + "name") + ">" + esc(m.name) + "</h3><p" + dp(b + "body") + ">" +
        esc(m.body) + "</p></div></div>";
    }).join(""));

    text("galleryTitle", A.galleryTitle, "app.galleryTitle");
    html("gallery", list(A.gallery).map(function (g) {
      return '<div class="phone"><img src="' + esc(g.image) + '" alt="' +
        esc(g.alt || "") + '" loading="lazy"></div>';
    }).join(""));

    text("learnedTitle", A.learnedTitle, "app.learnedTitle");
    text("learned", A.learned, "app.learned");
    text("appStatus", A.status, "app.status");
  });


  /* ------------------------------------------------------------------
     EXTRA SECTIONS
     Lets Ngoc add a whole new section from content.js alone, with no
     HTML and no help. Add an `extras` list to content.js and each entry
     becomes a real section, using the same five block types as the rest
     of the page. See HOW-TO-EDIT.md.
     ------------------------------------------------------------------ */
  section("extras", function () {
    var extras = list(C.extras);
    if (!extras.length) return;

    var host = document.getElementById("extraSections");
    if (!host) return;

    var nav = document.querySelector("nav ul");

    host.innerHTML = extras.map(function (x, i) {
      var id = x.id || ("extra" + i);
      var b = "extras." + i + ".";
      var band = x.band === "warm" ? "band-warm"
               : x.band === "mint" ? "band-mint" : "band-cream";

      var head = '<div class="section-head">' +
        "<h2" + dp(b + "title") + ">" + esc(x.title) + "</h2>" +
        (x.intro ? '<p class="intro"' + dp(b + "intro") + ">" + esc(x.intro) + "</p>" : "") +
        "</div>";

      var body = "";
      if (list(x.paragraphs).length) {
        body += list(x.paragraphs).map(function (p, pi) {
          return "<p" + dp(b + "paragraphs." + pi) + ">" + esc(p) + "</p>";
        }).join("");
      }
      if (list(x.cards).length) {
        body += '<div class="grid-2">' + list(x.cards).map(function (c, ci) {
          var link = c.url
            ? '<p><a href="' + esc(c.url) + '">' + esc(c.linkLabel || "Open it") + "</a></p>"
            : "";
          return '<div class="card"><h3' + dp(b + "cards." + ci + ".title") + ">" +
            esc(c.title) + "</h3><p" + dp(b + "cards." + ci + ".body") + ">" +
            esc(c.body) + "</p>" + link + "</div>";
        }).join("") + "</div>";
      }
      if (x.image) {
        body += '<img class="extra-img" src="' + esc(x.image) + '" alt="' +
                esc(x.imageAlt || "") + '" loading="lazy">';
      }
      if (x.download) {
        body += '<a class="btn" href="' + esc(x.download) + '" download>' + DL_ICON +
                esc(x.downloadLabel || "Download") + "</a>";
      }
      if (x.note) {
        body += '<p class="note-line"' + dp(b + "note") + ">" + esc(x.note) + "</p>";
      }

      if (nav && x.navLabel) {
        var li = document.createElement("li");
        li.innerHTML = '<a href="#' + esc(id) + '">' + esc(x.navLabel) + "</a>";
        nav.insertBefore(li, nav.lastElementChild);
      }

      return '<section id="' + esc(id) + '" class="reveal ' + band + '">' +
             '<div class="wrap">' + head + body + "</div></section>";
    }).join("");
  });

  // --- credentials --------------------------------------------------------
  section("credentials", function () {
    var K = C.credentials || {};
    text("credTitle", K.title, "credentials.title");
    html("credGrid", list(K.groups).map(function (g, gi) {
      var wide = /safeguard/i.test(g.heading || "") ? " safeguard" : "";
      return '<div class="cred' + wide + '"><h3' + dp("credentials.groups." + gi + ".heading") +
        ">" + esc(g.heading) + "</h3>" +
        '<ul class="plain">' + list(g.items).map(function (t, ii) {
          return "<li" + dp("credentials.groups." + gi + ".items." + ii) + ">" + esc(t) + "</li>";
        }).join("") + "</ul></div>";
    }).join(""));
    attr("cvBtn", "href", K.cvFile);
    var cv = $("cvBtn");
    if (cv) cv.setAttribute("download", "");
    text("cvLabel", K.cvLabel, "credentials.cvLabel");
  });

  // --- contact ------------------------------------------------------------
  section("contact", function () {
    var K = C.contact || {};
    text("contactTitle", K.title, "contact.title");
    text("contactBody", K.body, "contact.body");
    if (K.email) {
      attr("emailLink", "href", "mailto:" + K.email);
      text("emailLink", K.email);
    }
    html("contactLinks", list(K.links).map(function (l, i) {
      return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener"' +
        dp("contact.links." + i + ".label") + ">" + esc(l.label) + "</a>";
    }).join(""));
    text("availability", K.availability, "contact.availability");
    text("footerText", (C.footer || "") + " · © " + new Date().getFullYear());
  });

  // --- header border on scroll -------------------------------------------
  section("scroll", function () {
    var head = $("siteHead");
    if (!head) return;
    function onScroll() { head.classList.toggle("scrolled", window.scrollY > 8); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  });

  // --- gentle reveal ------------------------------------------------------
  section("reveal", function () {
    var reveals = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(reveals, function (r) { r.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    Array.prototype.forEach.call(reveals, function (r) { io.observe(r); });
  });

  // --- highlight the section you're reading -------------------------------
  section("scrollspy", function () {
    if (!("IntersectionObserver" in window)) return;
    var navLinks = Array.prototype.slice.call(document.querySelectorAll("nav a"));
    var sections = navLinks
      .map(function (a) {
        try { return document.querySelector(a.getAttribute("href")); }
        catch (e) { return null; }
      })
      .filter(Boolean);
    if (!sections.length) return;

    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id);
        });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  });
})();
