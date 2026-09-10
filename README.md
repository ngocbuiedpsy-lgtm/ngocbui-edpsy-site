# ngocbui-edpsy

Personal site for **Ngoc Bui**, educator and educational psychology researcher, Hanoi.

Plain HTML, CSS and JavaScript. No build step, no dependencies, no framework.
Push to the main branch and Vercel redeploys automatically.

**To change the words: edit [`content.js`](content.js). See [HOW-TO-EDIT.md](HOW-TO-EDIT.md).**

## Structure

```
index.html        page skeleton (empty slots, filled at load)
content.js        all copy, the only file you normally edit
main.js           fills the slots from content.js
style.css         design tokens and layout
images/           portrait, event photos, app screenshots
files/            downloadable PDFs (CV, workshop handout, journal article)
favicon.svg       browser tab icon
```

## Deploying

Already connected to Vercel. Any commit to the main branch deploys in about 30 seconds.
Vercel needs no framework preset, the site is served as static files from the repository root.

## Notes

- Fonts (Fredoka, DM Sans) load from Google Fonts; everything else is local.
- `Surviving-and-Thriving-APJE-2024.pdf` is redistributed under CC BY-NC-ND 4.0,
  cited in full on the page with a link to the DOI.
- Photographs are cropped so that no student is identifiable, and so that no
  personal contact details appear on classroom slides or whiteboards.
