/* ==========================================================================
   ALL THE WORDS ON YOUR SITE LIVE IN THIS FILE.

   To change something: edit the text between the quote marks " ... "
   Keep the quote marks, the commas, and the labels (like  title: ) exactly
   as they are. Then scroll down and click "Commit changes".

   If you want an apostrophe inside text, that is fine: "I'm here" works.
   See HOW-TO-EDIT.md for step-by-step pictures.
   ========================================================================== */

const CONTENT = {

  /* ---- Browser tab + your name in the header ------------------------- */
  meta: {
    pageTitle: "Ngoc Bui, educator and educational psychology researcher",
    name: "Ngoc Bui",
    nameVi: "Bùi Ánh Ngọc",
  },

  /* ---- The first thing people see ------------------------------------ */
  hero: {
    line1: "Educator and educational psychology researcher in Hanoi.",
    line2: "I plan around the whole person, not just the level.",
    subtitle:
      "I teach English, thinking skills, and social-emotional skills.",
    photoCaption: "Ngoc Bui, Hanoi",
  },

  /* ---- Hello / about -------------------------------------------------- */
  hello: {
    title: "Hello",
    paragraphs: [
      "I teach English in Hanoi, at the centre I work for and in my own small classes. I build critical thinking and social-emotional skills into the lessons, and I also teach them on their own.",
      "Mental health education is the part I care about most. I want people to understand how minds actually work: mood, neurodivergence, and the practical business of helping a nervous system settle enough that learning and change can occur. I meet people where they are at.",
      "I have also done a bit of research: one published Q1 paper on teacher resilience, and a book chapter on the way.",
    ],
  },

  /* ---- Teaching ------------------------------------------------------- */
  teaching: {
    title: "Teaching",
    intro:
      "I teach IELTS, academic and general English. Critical thinking and social-emotional skills are usually built into the lessons, and sometimes they are the whole session, run as standalone workshops. Individual and group, online and in person.",

    listTitle: "What I teach",
    list: [
      {
        title: "IELTS and academic English",
        body: "Exam preparation that doesn't stop at exam technique: essay structure, source evaluation and argument, so the skills survive the test.",
      },
      {
        title: "Critical thinking",
        body: "A course I put together in 2019 and still teach. Students practise asking better questions, weighing what they read, and building an argument they can defend in English.",
      },
      {
        title: "Social-emotional and life skills",
        body: "Career exploration using the bullseye tool. Personal strengths with the VIA character-strengths survey. Study skills and goal-setting. And perspective-taking, because you don't always have to think outside the box, but it helps to know which box you're standing in.",
      },
    ],

    lumTitle: "Lum",
    lumBody:
      "Since 2019 I have run my own small class under the name Lum, from the Latin for light. It is where I first tried teaching thinking skills and social-emotional skills alongside English, and it is still how I like to teach.",
    testimonialsTitle: "What students and parents said",
    testimonialsNote:
      "From the critical thinking and problem solving courses. Translated from Vietnamese.",
    testimonials: [
      {
        quote: "I was glad to see my child excited before and after every lesson, and more confident presenting in English than before.",
        who: "Ngoc Hue, parent, and a primary teacher in Hanoi",
        image: "images/voice-ngoc-hue.webp",
        imageAlt: "Ngoc Hue at a school end-of-year ceremony",
      },
      {
        quote: "My child reads English material with real interest now, and talks to me about the topics from class.",
        who: "Phong Chau, parent, and a retired architect",
        image: "images/voice-phong-chau.webp",
        imageAlt: "Phong Chau",
      },
      {
        quote: "What I liked most was getting to look at a problem from many different angles so I could argue better. It made my thinking more open.",
        who: "Ngoc Mai, Year 9 student, Hanoi",
        image: "images/voice-ngoc-mai.webp",
        imageAlt: "Ngoc Mai with a guitar",
      },
      {
        quote: "The theory and the exercises get harder step by step, which keeps you thinking.",
        who: "Hien Anh, Year 11 student, Hanoi",
        image: "images/voice-hien-anh.webp",
        imageAlt: "Hien Anh outdoors",
      },
      {
        quote: "You can say what you think in class without worrying, and there is no pressure about winning or losing against the others.",
        who: "Khanh Vi, Year 7 student, Hanoi",
        image: "images/voice-khanh-vi.webp",
        imageAlt: "Khanh Vi reading a display at an exhibition",
      },
      {
        quote: "The course built up the general academic skills I needed for my MBA.",
        who: "Hoang Huyen, MBA, University of Northampton, UK",
        image: "images/voice-hoang-huyen.webp",
        imageAlt: "Hoang Huyen while travelling",
      },
    ],
  },

  /* ---- Workshops & talks ----------------------------------------------- */
  talks: {
    title: "Workshops & talks",
    intro:
      "Sessions I have been invited to run or speak at, for students and for the adults around them.",
    items: [
      {
        date: "January 2025",
        title: "Breaking stereotypes about sexual diversity in schools",
        where:
          "Lý Thường Kiệt High School, Kim Bảng, Hà Nam. Co-hosted by the 5U Debate Club, with support from UN Women (Beijing+30).",
        body:
          "Guest speaker for the afternoon session: an introduction to the Building Happy Schools competition, and a conversation with students about stereotypes around gender and sexual orientation diversity in school life.",
        image: "images/talk-hanam.jpg",
        imageAlt: "Ngoc speaking to students on stage at Lý Thường Kiệt High School, Hà Nam",
      },
      {
        date: "November 2024",
        title: "Youth Voice Forum (Diễn đàn Tiếng nói Thanh niên)",
        where: "Hanoi. Organised by the 5U Debate Club.",
        body:
          "Speaker on the panel “Diversity in Education: Understanding and Practice”, in front of student delegates and observers, on how prejudice about sexual orientation diversity shows up in classrooms and what teachers can do about it.",
        image: "images/talk-youthforum.jpg",
        imageAlt: "Ngoc speaking on a panel at the Youth Voice Forum",
      },
      {
        date: "December 2023",
        title: "Handling Rejection",
        where: "Vinschool, Hanoi. A workshop for lower-secondary students.",
        body:
          "What to do when you get turned down: acknowledging the feeling, challenging the thought, asking for support, learning from it, and staying open afterwards. Most of the time was role-play. A mini exposure exercise: students took turns giving and receiving rejection, so they experienced both ends of it firsthand. See my handout below",
        image: "images/workshop-vinschool.jpg",
        imageAlt: "Ngoc teaching at the front of a classroom, with students' written responses posted above the whiteboard",
        download: "files/Handling-Rejection-handout.pdf",
        downloadLabel: "Download the handout (PDF)",
      },
    ],
  },

  /* ---- Materials -------------------------------------------------------- */
  materials: {
    title: "Materials",
    intro:
      "Things I have made for lessons. The three activities open in their own page and work on a phone. Nothing typed into them is saved or sent anywhere.",

    items: [
      {
        title: "Feelings Come in All Sizes",
        audience: "For primary school students",
        body:
          "An interactive page where children meet two characters, Mai and Bao, and learn that a feeling is not only good or bad, it also has a size. Children notice where a feeling shows up in the body, then use a simple plus and minus control to show how big four feelings are for them right now.",
        why:
          "Why I built it this way: children are asked how they feel far more often than they are given a way to answer. \u201CSad\u201D and \u201Ca bit sad\u201D are different things, and giving the size its own control lets a child show that difference rather than having to explain it. Nothing is saved or sent anywhere, so it stays a noticing exercise and not a record.",
        image: "images/material-feelings.webp",
        imageAlt: "Four feeling cards, each with a drawn face and a control for how big the feeling is",
        url: "materials/sel-feelings-check-in.html",
        linkLabel: "Try it",
      },
      {
        title: "Assertiveness",
        audience: "For teenagers and young adults",
        body:
          "Four steps behind an assertive response, one situation played out three ways, then six everyday situations where you choose how you would respond and see what tends to follow.",
        why:
          "Why I built it this way: passive, aggressive and assertive are easy to define and hard to actually use. The situations here are ordinary ones, a queue, a group project, a comment from a family member, and the feedback describes what usually happens rather than marking an answer right or wrong. Saying the useful thing under pressure is a skill, and skills need rehearsal more than definitions.",
        image: "images/material-assertiveness.webp",
        imageAlt: "One situation shown three ways: passive, aggressive and assertive",
        url: "materials/assertiveness.html",
        linkLabel: "Try it",
      },
      {
        title: "Managing Big Feelings",
        audience: "For young adults",
        body:
          "The same situation runs twice, once where a thought sends it spiralling and once where it settles, so the path from situation to thought to feeling to action becomes visible. Then a scale for rating how big a feeling is, and the opposite action skill for anger, anxiety, sadness and frustration.",
        why:
          "Why I built it this way: telling someone that a thought shapes a feeling rarely lands. Running one ordinary situation twice, changing only the thought, shows it instead. It draws on cognitive behavioural therapy and on the opposite action skill from dialectical behaviour therapy. It is a teaching tool, not therapy.",
        image: "images/material-big-feelings.webp",
        imageAlt: "The cycle from situation to thought to feeling to behaviour, shown in four steps",
        url: "materials/managing-big-feelings.html",
        linkLabel: "Try it",
      },
      {
        title: "Including students with autism in the primary classroom",
        audience: "A guide for teachers",
        body:
          "A twenty-eight page booklet for primary teachers, written in 2019 during my Master of Education at UNSW. It covers what the research says about autism in the classroom, four evidence-based practices with the steps to run each, and practical strategies: visual cues, schedules, calm corners, and how to help friendships along. Referenced throughout.",
        why:
          "Why I built it this way: what a class teacher can find is usually either a short leaflet or a literature review. I wanted the thing in between, short enough to read in an evening and specific enough to use the next morning.",
        image: "images/material-booklet.webp",
        imageAlt: "The cover of the booklet, Including students with Autism Spectrum Disorder in the primary classroom",
        download: "files/Ngoc-Bui-autism-booklet-sample.pdf",
        downloadLabel: "Read the sample (PDF, 10 pages, 2MB)",
        note: "Nine pages here as a sample. Write to me for the full booklet.",
      },
    ],
  },

  /* ---- Research -------------------------------------------------------- */
  research: {
    title: "Research & writing",
    intro:
      "I am interested in mental health education and advocacy: promoting evidence-based approaches, and chipping away at the stigma that stops people asking for help. From 2020 to 2023 I collaborated with Dr Hoa Nguyen of the School of Education, UNSW Sydney, on a study of teacher resilience in Vietnam.",

    paper: {
      title:
        "Surviving and thriving: voices from teachers in remote and disadvantaged regions of Vietnam",
      authors: "Hoa T.M. Nguyen, Ngoc A. Bui, Nga T.H. Ngo & Trang Q. Luong",
      journal: "Asia Pacific Journal of Education, April 2024",
      doi: "https://doi.org/10.1080/02188791.2024.2336246",
      doiLabel: "Read it at the publisher",
      summary:
        "We interviewed 53 teachers in the northern mountainous provinces of Vietnam. The short version: contextual challenges outweighed the resources available to cope with them, leaving teachers “surviving not yet thriving.” Their resilience strategies came mostly from within themselves and their colleagues, with little financial, practical, emotional or institutional support from schools or local authorities. The paper argues for more of that institutional support, alongside resilience training for teachers and preservice teachers.",
      funding:
        "Funded by the Vietnam National Foundation for Science and Technology Development (NAFOSTED), grant 503.01-2020.310. Open access under CC BY-NC-ND 4.0.",
    },

    otherTitle: "Also",
    other: [
      {
        title: "Real Insights",
        body: "A Vietnamese-language page where I write about mental health, evidence, and stigma. Occasional rather than regular.",
        url: "https://www.facebook.com/real.insights.vn",
        linkLabel: "Read it on Facebook",
      },
      {
        title:
          "Unveiling Challenges and Contributions of Overseas Alumni in Education: Tales of Vietnamese Returnees from Australia",
        body: "Contributing author. Routledge Critical Studies in Asian Education. Forthcoming, December 2026.",
      },
    ],
    orcid: "https://orcid.org/0000-0002-3556-4952",
    orcidLabel: "ORCID: 0000-0002-3556-4952",
  },

  /* ---- The app -------------------------------------------------------- */
  app: {
    title: "Snap Out of It",
    subtitle: "A mobile app for people with executive function difficulties",
    intro: [
      "I am building an Android app for people, often neurodivergent, who know what they need to do and cannot start. I am not a developer. I design it and work with an AI assistant to write the code, which has turned out to be a good way to learn what I actually believe about helping someone get unstuck.",
      "It has clarified what I think about learning: reduce the demand until the first step is genuinely possible, remove the shame from not managing, and never make the person perform being fine.",
    ],
    modesTitle: "Three ways in",
    modes: [
      {
        name: "I'm Frozen",
        body: "For when nothing is moving. You choose how much of a push you want, gentle, medium or active, and get a small physical task: ten slow taps, humming for five seconds, photographing something green. It uses the phone's sensors, so the body does something before the mind is asked to.",
        image: "images/app-unstuck.jpg",
        alt: "The intensity chooser: gentle, medium, active",
      },
      {
        name: "I Have a Task",
        body: "You type what you need to do. The app finds it in a library of thirty everyday tasks and offers three ways in: the tiniest possible step, the whole thing in order, or a map of entry points you can start from anywhere. Different people are stuck in different places.",
        image: "images/app-approaches.jpg",
        alt: "Three approaches: tiniest step, from the beginning, start anywhere",
      },
      {
        name: "Sit with Luma",
        body: "Body doubling with a turtle. You set an intention and a timer, choose a background sound, and Luma waits with you, checking in a couple of times but never demanding an answer. At the end you can say it went well, or say you just stayed. Both are offered as real answers.",
        image: "images/app-timer.jpg",
        alt: "The Sit with Luma timer with a gentle check-in",
      },
    ],
    galleryTitle: "More screens",
    gallery: [
      { image: "images/app-tap.jpg", alt: "A tap activity in progress" },
      { image: "images/app-map.jpg", alt: "The start-anywhere task map" },
      { image: "images/app-end.jpg", alt: "The end of a session, with time history" },
    ],
    learnedTitle: "What it taught me",
    learned:
      "The app is one expression of values I hold across my work: getting unstuck is rarely about willpower or discipline. It is about designing a system that carries some of the weight for you, so the first step becomes possible. My favourite thing in it is a button: \"I stayed. That counts too.\"",
    status: "In development since June 2026, on Android. Not yet published, and I am aiming for the end of the year.",
  },

  /* ---- Credentials ---------------------------------------------------- */
  credentials: {
    title: "Credentials",
    groups: [
      {
        heading: "Education",
        items: [
          "Master of Education (Educational Psychology), with Excellence. University of New South Wales, Sydney, 2019",
          "Graduate Diploma in Education (Pedagogy). Hanoi National University of Education 2, 2017",
          "Bachelor of International Studies. Hanoi University, 2016",
        ],
      },
      {
        heading: "Certification",
        items: [
          "Mental Health First Aid. Mental Health First Aid Australia, 2019",
          "TESOL Certificate. Australian International College Language (AICOL), 2017",
          "IELTS 8.0 · Cambridge Advanced C2",
        ],
      },
    ],
    cvLabel: "Download my CV (PDF)",
    cvFile: "files/Ngoc-Bui-CV.pdf",
  },

  /* ---- Contact --------------------------------------------------------- */
  contact: {
    title: "Get in touch",
    body:
      "If you are putting together something for students or for teachers and you think I might fit, I'd like to hear about it.",
    availability:
      "Hanoi based, open to Ho Chi Minh City, Da Nang and remote.",
    email: "ngocbui.edpsy@gmail.com",
  },

  footer: "Ngoc Bui",
};
