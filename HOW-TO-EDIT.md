# How to change anything on your site

You never need to install anything. Everything happens in your web browser.

---

## The one file that matters

**`content.js`** holds every word on the site. Nothing else does.

The other files (`index.html`, `style.css`, `main.js`) are the machinery, how it looks
and how it puts the words on the page. You can leave those alone forever.

---

## Changing some text

1. Go to your repository on GitHub.
2. Click **`content.js`**.
3. Click the **pencil icon** near the top right of the file.
4. Find the sentence you want to change and type over it.
5. Scroll to the bottom, click the green **Commit changes** button, then **Commit changes** again in the box that appears.
6. Wait about 30 seconds and refresh your site. Done.

You can do all of this on your phone.

---

## The one rule

Text lives **between quote marks**. Change what's inside; leave everything else alone.

```
subtitle: "Educator and educational psychology researcher, based in Hanoi.",
          ^                                                              ^
          keep this quote mark                        and keep this one, and the comma
```

Apostrophes inside the text are fine, `"I'm here"` works perfectly.

If you want to use a **double quote mark** inside your text, put a backslash before it:

```
learned: "The line I am proudest of is a button: \"I stayed. That counts too.\"",
```

---

## Adding a new item to a list

Some things are lists, talks, testimonials, credentials. Each item sits inside `{ }`
braces, separated by commas. To add one, copy an existing block and change the words.

Adding a talk, for example. Find the `talks:` section and copy one whole block:

```
      {
        date: "March 2026",
        title: "Your new talk",
        where: "Where it happened, with whoever you did it with",
        body: "A sentence or two about what you actually did.",
      },
```

Paste it in with the others. Keep the `{`, the `}`, and the comma after the `}`.

To add a photo to it, put the image file in the `images` folder and add two more lines
inside the braces:

```
        image: "images/my-new-photo.jpg",
        imageAlt: "A short description of the photo for screen readers",
```

To **remove** an item, delete it from the opening `{` to the closing `},` including the comma.

---

## Adding a photo or a PDF

1. On GitHub, click into the **`images`** folder (for pictures) or **`files`** folder (for PDFs).
2. Click **Add file → Upload files**, drag your file in, and commit.
3. Refer to it in `content.js` as `"images/yourfile.jpg"` or `"files/yourfile.pdf"`.

Use lowercase filenames with hyphens instead of spaces, `sel-unit-outline.pdf`, not
`SEL Unit Outline.pdf`. Spaces in filenames cause broken links on the web.

Before uploading a photo, shrink it. Anything wider than about 1400 pixels is bigger than
the site can use and just makes the page slow to open.

---

## Replacing your CV

Upload the new PDF into the `files` folder with the name **`Ngoc-Bui-CV.pdf`** so it
replaces the old one. Nothing else needs changing, the download button points at that
name already.

---

## If something breaks

The most likely cause is a missing quote mark, brace or comma. The site will go blank
rather than showing half a page.

**To undo:** on GitHub, click the **History** button (or the clock icon) at the top of the
file, find the version from before your change, open it, and click **Revert**. Your site
goes back to how it was in about 30 seconds. Nothing is ever really lost.

---

## Changing your site's address

In Vercel: **your project → Settings → Domains**. Add the name you want, e.g.
`ngocbui-edpsy.vercel.app`, and set it as the primary domain. Vercel URLs can't contain
dots in that first part, so hyphens are the way to do it.

If you later buy a real domain (about $12 a year), add it in the same place and Vercel
gives you two settings to paste at whoever you bought it from.

---

## What's in each file

| File | What it is |
| --- | --- |
| `content.js` | **Every word on the site.** This is your file. |
| `index.html` | The skeleton of the page. |
| `style.css` | Colours, fonts, spacing. |
| `main.js` | Puts the words from `content.js` onto the page. |
| `images/` | Photographs and app screenshots. |
| `files/` | PDFs people can download. |
| `favicon.svg` | The little icon in the browser tab. |

---

## The colours, if you ever want them

At the very top of `style.css`:

```
--cream:      #FDF8F3   the background
--teal:       #2E8B72   headings, links, the portrait outline
--tangerine:  #E8794A   the underline, small accents
--ink:        #33303F   body text
```

Change a value there and it changes everywhere on the site at once.

---

## Adding a whole new section

You can add a new section to the site yourself, from `content.js` alone. No HTML,
no help needed. The section gets its own heading, its own place in the menu at the
top, and the same design as everything else.

Near the bottom of `content.js`, just above the line that starts `footer:`, add this:

```
  extras: [
    {
      id: "speaking",
      navLabel: "Speaking",
      band: "mint",
      title: "Speaking",
      intro: "One sentence under the heading.",
      paragraphs: [
        "A paragraph.",
        "Another paragraph.",
      ],
    },
  ],
```

Save, upload, and the section appears.

### What each line does

| Line | What it does |
| --- | --- |
| `id` | The web address of the section. Lowercase, no spaces. |
| `navLabel` | What appears in the menu at the top. Leave it out and the section still exists, just not in the menu. |
| `band` | Background colour: `"cream"`, `"warm"` or `"mint"`. |
| `title` | The big heading. |
| `intro` | One sentence under the heading. Optional. |
| `paragraphs` | Ordinary paragraphs. Optional. |

### Things you can also put in a section

Cards, side by side:

```
      cards: [
        { title: "First card", body: "What it says." },
        { title: "Second card", body: "What this one says.",
          url: "https://example.com", linkLabel: "Have a look" },
      ],
```

A picture (put the file in the `images` folder first):

```
      image: "images/your-photo.jpg",
      imageAlt: "A short description for screen readers",
```

Something to download (put the file in the `files` folder first):

```
      download: "files/your-file.pdf",
      downloadLabel: "Download the thing (PDF)",
```

A closing line in lighter text:

```
      note: "A quieter sentence at the end.",
```

### More than one section

Each section is a block inside `{ }` braces, separated by a comma:

```
  extras: [
    { id: "speaking", navLabel: "Speaking", title: "Speaking", ... },
    { id: "writing",  navLabel: "Writing",  title: "Writing",  ... },
  ],
```

Sections appear in the order you write them, between Credentials and Say hello.

### The one rule, again

Everything lives between quote marks, and every line ends with a comma. If the page
goes blank, you have missed one of those, and the message on screen will say so.
