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
    testimonials: [
      {
        quote: "What I liked most was getting to look at a problem from many different angles so I could argue better. It made my thinking more open.",
        who: "Ngoc Mai, Year 9, Trung Hoa Secondary School, Hanoi",
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
        body: "For when nothing is moving. You choose how much of a push you want, gentle, medium or active, and get a small physical task: ten slow taps, humming for five seconds, photographing something green.",
        image: "images/app-unstuck.jpg",
        alt: "The intensity chooser: gentle, medium, active",
      },
      {
        name: "I Have a Task",
        body: "You type what you need to do. The app finds it in a library of thirty everyday tasks and offers three ways in: the tiniest possible step, the whole thing in order, or a map of entry points you can start from anywhere. A non-linear approach to tasks.",
        image: "images/app-approaches.jpg",
        alt: "Three approaches: tiniest step, from the beginning, start anywhere",
      },
      {
        name: "Sit with Luma",
        body: "Body doubling with a turtle mascot. You set an intention and a timer, choose a background sound, and Luma waits with you, checking in a couple of times but never demanding a perfect answer. At the end you can say it went well, or say you just stayed. Both are acknowledged as valid answers.",
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
    title: "Say hello",
    body:
      "If you are putting together something for students or for teachers and you think I might fit, I'd like to hear about it.",
    availability:
      "Hanoi based, open to Ho Chi Minh City, Da Nang and remote. Open to the right role.",
    email: "ngocbui.edpsy@gmail.com",
    links: [
      { label: "ORCID", url: "https://orcid.org/0000-0002-3556-4952" },
      { label: "Real Insights", url: "https://www.facebook.com/real.insights.vn" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/nora-ngoc-bui-33437812b" },
    ],
  },

  footer: "Ngoc Bui · Hanoi, Vietnam",
};
