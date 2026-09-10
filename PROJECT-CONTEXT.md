# Ngoc Bui portfolio site, project context

Reference document for future Claude conversations. Everything here was established
in the build sessions of September 2026. Nothing is inferred or assumed.

Last updated: 10 September 2026.

---

## 1. What the project is

A personal portfolio website for Ngoc Bui, built to support job applications in
education and mental health education in Vietnam. It is a plain static website:
HTML, CSS and JavaScript, no framework and no build step.

**Purpose:** something a hiring panel at an international school, or a programme
officer at an NGO, can open and read in a few minutes.

---

## 2. Who Ngoc is

Verified against her CV and the published paper. **Get these right.**

| | |
| --- | --- |
| Name | Ngoc Bui (Bùi Ánh Ngọc) |
| Based | Hanoi, Vietnam |
| Email | ngocbui.edpsy@gmail.com |
| ORCID | 0000-0002-3556-4952 |
| LinkedIn | linkedin.com/in/nora-ngoc-bui-33437812b |
| Facebook page | facebook.com/real.insights.vn ("Real Insights", Vietnamese-language, mental health) |

### Qualifications
- Master of Education (Educational Psychology), with Excellence. UNSW Sydney, 2019
- Graduate Diploma in Education (Pedagogy). Hanoi National University of Education 2, 2017
- Bachelor of International Studies. Hanoi University, 2016
- Mental Health First Aid, Mental Health First Aid Australia, 2019
- TESOL Certificate, Australian International College Language (AICOL), 2017
- IELTS 8.0, Cambridge Advanced C2

### Publications
- **"Surviving and thriving: voices from teachers in remote and disadvantaged
  regions of Vietnam."** Hoa T.M. Nguyen, **Ngoc A. Bui**, Nga T.H. Ngo & Trang Q.
  Luong. *Asia Pacific Journal of Education*, April 2024.
  DOI 10.1080/02188791.2024.2336246. Open access, CC BY-NC-ND 4.0.
  Funded by NAFOSTED grant 503.01-2020.310.
  **She is second author, not first.** Ngoc describes this as a Q1 paper.
- Contributing author, "Unveiling Challenges and Contributions of Overseas Alumni
  in Education: Tales of Vietnamese Returnees from Australia." Routledge Critical
  Studies in Asian Education. Forthcoming December 2026.

### Work
- Teacher, Impact International Education JSC / Lum Class, 12/2019 to present
- Part-time Research Contributor, UNSW School of Education, 5/2020 to 5/2023.
  Collaborated with **Dr Hoa Nguyen**.
- Earlier: UNSW Lowy Cancer Research Centre (2019), Golden Gate English and
  English Hanoi (2016–2018), Skill Me Up Vietnam / YSEALI (2016–2017),
  Transformative Learning Vietnam & KHAC Social Enterprise (2016)

### Talks and workshops on the site
- **January 2025**, Lý Thường Kiệt High School, Kim Bảng, Hà Nam. Guest speaker,
  afternoon session, on stereotypes about gender and sexual orientation diversity.
  Co-hosted by the **5U Debate Club**, with support from UN Women (Beijing+30).
- **November 2024**, Youth Voice Forum (Diễn đàn Tiếng nói Thanh niên), Hanoi.
  Panel speaker on "Diversity in Education: Understanding and Practice".
  Organised by the **5U Debate Club**.
- **December 2023**, Vinschool Hanoi. "Handling Rejection" workshop for
  lower-secondary students. Her own Canva handout is on the site as a PDF.

### The app
**Snap Out of It**, an Android app for people, often neurodivergent, with executive
function difficulties. Three modes: I'm Frozen, I Have a Task, Sit with Luma (body
doubling with a turtle called Luma). In development since June 2026, not published,
aiming for end of 2026. Ngoc designs it and works with an AI assistant to write the
code; she is not a developer.

---

## 3. How to describe her, and how not to

These are explicit instructions from Ngoc. They matter more than anything else here.

**She is an educator and educational psychology researcher.**

- **Never** call her an educational psychologist, a counsellor, or a therapist.
- Do not describe her research as an ongoing programme. She has one published
  paper and one chapter coming. Her words: "I don't really research about what
  keeps teachers going."
- Her stated interest is **mental health education and advocacy**: promoting
  evidence-based approaches and reducing stigma. Not "mental health in education".
  She wants to *educate about* mental health.
- She cares about mood, neurodivergence, and nervous system support.
- The UNSW work is **past tense** (2020–2023) and was a **collaboration with Dr Hoa
  Nguyen**, not employment by the school.

### Tone
Ngoc asked for: **authentic, connecting, friendly, subtle. Not boastful, not
overselling.** She has rejected copy for being "cringe", for sounding "desperate",
and for making her sound "too smart".

- No marketing voice, no adjective inflation.
- Do not claim more than the evidence supports.
- Avoid anything that reads as job-hunting desperation.

### Writing mechanics
- **No em dashes.** She dislikes them and says they are not her style. Use commas,
  colons, full stops or parentheses. This applies to every file in the project.
- British spelling: programmes, personalised, organisation, realise, labelled.
- First person.

---

## 4. Where everything lives

| | |
| --- | --- |
| Working folder | `C:\Users\Admin\OneDrive\A portfolio 2026\ngocbui-site\` |
| Source material | `C:\Users\Admin\OneDrive\A portfolio 2026\` (photos, PDFs, app screenshots) |
| GitHub repo | github.com/ngocbuiedpsy-lgtm/ngocbui-edpsy-site |
| Hosting | Vercel, connected to that repo, deploys on push |
| Intended URL | `ngocbui-edpsy.vercel.app` (Vercel project names cannot contain dots) |

**As of 10 September 2026 the repo is still empty and nothing is deployed.**
Ngoc has been working from the local files. To publish: drag the *contents* of
`ngocbui-site` into GitHub (drag, do not use "choose your files", which cannot take
folders), commit, and Vercel builds in about 30 seconds.

---

## 5. How the site is built

```
index.html    page skeleton, empty slots with ids, plus a typo-notice script
content.js    every word on the site, the only file Ngoc edits
main.js       reads content.js and fills the slots
style.css     colours, type, layout
images/       ngoc.jpg, talk-hanam.jpg, talk-youthforum.jpg,
              workshop-vinschool.jpg, app-*.jpg (6 screenshots)
files/        Ngoc-Bui-CV.pdf, Handling-Rejection-handout.pdf,
              Surviving-and-Thriving-APJE-2024.pdf
favicon.svg
README.md, HOW-TO-EDIT.md, PROJECT-CONTEXT.md
```

**How it works:** `index.html` contains no words. Every piece of text is written in
by `main.js` from `content.js` at page load. This is why a typo in `content.js`
blanks the whole page.

### Sections, in order
Hello, Teaching, Workshops & talks, Materials, Research & writing, Snap Out of It,
Credentials, Say hello.

### Safety features already built in
1. **`main.js` runs each section in its own guard.** If one section fails it logs a
   warning and the rest of the page still renders. Tested by deleting ten elements
   from the HTML: no crash.
2. **Version tags on assets.** `content.js?v=7`, `main.js?v=7`, `style.css?v=7`.
   **Bump this number whenever those files change**, or browsers serve a stale
   cached copy against a new page, which blanks the site.
3. **A typo notice.** If `content.js` cannot be parsed, the page shows a message
   naming the likely cause instead of going silently blank.

---

## 6. Design system

| Token | Hex | Use |
| --- | --- | --- |
| `--cream` | `#FDF8F3` | page background |
| `--cream-warm` | `#F8F0E7` | warm section bands |
| `--card` | `#FFFDFA` | cards |
| `--ink` | `#33303F` | body text |
| `--ink-soft` | `#5F5A6B` | secondary text |
| `--ink-faint` | `#8C8796` | captions, small print |
| `--teal` | `#2E8B72` | headings accent, buttons, portrait outline |
| `--teal-deep` | `#1F6B57` | links |
| `--teal-pale` | `#DFF3EC` | mint band, contact card |
| `--tangerine` | `#E8794A` | underline, eyebrow labels, section ticks |
| `--line` | `#E8DFD4` | borders |

- **Fonts:** Fredoka (headings), DM Sans (body), from Google Fonts.
- **Body size 1.15rem.** Ngoc asked twice for larger text. Do not shrink it.
- **Section bands:** Hello, Workshops, Research, Credentials and Contact are cream.
  Teaching and Snap Out of It are warm sand. Materials is pale mint. There are no
  hairline rules between sections; the colour change separates them.
- **Nested tints are handled:** quote cards and the "What it taught me" panel turn
  white on the warm bands so they do not disappear.
- A small tangerine tick sits above every section heading.
- Mobile: the header stops being sticky below 720px and the nav becomes one
  swipeable row, because a tall sticky header ate the phone screen.

**Design lineage:** the palette and the teardrop-framed portrait come from Ngoc's
old Google Sites site "Lum class" (2019–2022, teal and orange on cream, Comfortaa).
Fredoka and DM Sans come from her Snap Out of It app, so the site and the app look
like the same person made them.

---

## 7. Content decisions already made

Do not silently reverse these.

- **Vinschool workshop moved out of Teaching** into Workshops & talks. Ngoc
  questioned why a single workshop headlined a section about her regular work.
- **Quick facts box removed.** "Open to work" read as desperate; bilingual is not
  a differentiator in Hanoi; the numbers were filler.
- **Safeguarding statement removed** at Ngoc's request, after being told several
  target postings name safeguarding explicitly.
- **Testimonials cut to one** (Ngoc Mai, Year 9). Ngoc will supply replacements
  for the other two.
- **The three "findings" cards under the paper were cut.** One summary paragraph
  remains.
- **The 2016–2017 YSEALI life-skills entry was cut** from Workshops.
- **The CV was rebuilt** as a one-page PDF with the Lum Class entry Ngoc supplied.
  She decided the talks are "once off occasional events" and should **not** go on
  the CV, only on the site.
- **Facebook page included** deliberately, described as "occasional rather than
  regular". Never mention engagement or that it flopped.

### Photo and safeguarding notes
- The portrait is cropped chest-up from `Bui Anh Ngoc_profile pic.jpg`.
- The Hà Nam and Youth Forum photos contain no identifiable students.
- The Vinschool photo **does** show identifiable students in uniform. Ngoc asked
  for a landscape crop showing students and was told twice about the safeguarding
  trade-off. **This was her decision.** Do not re-litigate it.
- An earlier crop of a different Vinschool photo was rejected because the projected
  slide showed her personal mobile number and a Facebook URL.

---

## 8. Open items as of 10 September 2026

1. **The repo is empty. The site is not live.** This is the next practical step.
2. **Four blocks in `content.js` have no matching slot in `index.html`**, so they
   are invisible: the whole `wellbeing` section, `pdf`/`pdfLabel` on the paper, the
   Routledge chapter card, and `orcid`/`orcidLabel`. Ngoc previously asked for all
   four to be removed, then they reappeared in her edited file. **Ask her whether
   to restore the HTML slots or delete the blocks. Do not guess.**
   (`index.html` currently has `materials` slots; `content.js` has `wellbeing`.)
3. **Materials section has no live links yet.** Ngoc has HTML pages she built, a
   vocabulary practice page and social-emotional lesson pages. When she supplies
   them they can be hosted and linked.
4. **Two replacement testimonials** to come.
5. **CV/site mismatch to confirm:** the CV says Lum Class runs "12/2019 to Present";
   Ngoc once said 2019 to 2025 then confirmed ongoing. The site says "Since 2019".
6. **A social-emotional learning unit and a teacher resilience workshop** were
   discussed as the highest-value artefacts to build. Advice given and not
   withdrawn: build them from scratch against a published framework such as CASEL
   and cite it, rather than personalising downloaded handouts, because hiring
   panels recognise circulating materials.

---

## 9. Pitfalls, learned the hard way

**Straight double quotes inside text break the whole site.** This has happened once.

```
Wrong:  summary: "leaving teachers "surviving not yet thriving." Their ..."
Right:  summary: "leaving teachers “surviving not yet thriving.” Their ..."
Also:   summary: "leaving teachers \"surviving not yet thriving.\" Their ..."
```

Apostrophes are always safe. `"I'm here"` works.

**Other blanking causes:** a missing comma at the end of a line, a deleted brace,
or a stale browser cache. For cache, hard refresh with Ctrl+Shift+R, and bump the
`?v=` number in `index.html` whenever `content.js`, `main.js` or `style.css` change.

**To undo a bad edit on GitHub:** open the file, click History, open the version
from before, click Revert.

---

## 10. Working preferences

- Ngoc asks for proposals in text **before** changes are made to content. She
  approves or amends, then the change is applied.
- Design changes she has approved can be made directly.
- She edits `content.js` herself, sometimes in VS Code. Preserve her wording
  exactly. When fixing a broken file, fix only what is broken.
- She has no coding background. Explain in plain language, and say what to click.
- Never ask for GitHub or Vercel credentials. The flow is: files are written into
  her OneDrive folder, she uploads them herself.
