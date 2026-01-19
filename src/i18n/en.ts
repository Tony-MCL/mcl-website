const en = {
  header: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
      progress: "Progress",
    },
    theme: {
      ariaToLight: "Switch to light mode",
      ariaToDark: "Switch to dark mode",
      titleLight: "Light mode",
      titleDark: "Dark mode",
      labelLight: "Light",
      labelDark: "Dark",
      mobileLight: "Light mode",
      mobileDark: "Dark mode",
    },
    lang: {
      label: "Language",
      nb: "NO",
      en: "EN",
      aria: "Switch language",
    },
  },

  footer: {
  copyright: "Morning Coffee Labs",
  links: {
    termsPurchase: "Purchase terms",
    termsUse: "Terms of use",
    privacy: "Privacy policy",
    refund: "Refunds",
  },
},

home: {
  hero: {
    title: "Simple tools for complex work",
    tagline:
      "Digital tools for structure, overview, and delivery — built for real life, not for demos.",
    sub:
      "We prioritize clear structure, predictable functionality, and tools that are easy to adopt — even as needs grow. Built for daily use under real constraints.",
  },

  sections: {
    building: "What we build",
    principles: "Principles",
    audience: "Who this is for",
  },

  cards: {
    progress: {
      title: "Manage Progress",
      body:
        "Manage Progress is a lightweight tool for project planning and follow-up. Built to provide fast overview, clear structure, and control — without heavy setup, complex terminology, or unnecessary choices.",
      cta: "See Progress →",
      launchNote: "(launching February 1)",
      contactCta: "Questions? Get in touch →",
    },

    services: {
      title: "From challenge to solution",
      body:
        "We build tools that start from a real challenge, take shape as a clear idea — and end as a solution that works in practice. You can commission an app you own, or share an idea that can become an MCL product.",
      cta: "See services and idea bank →",
    },

    documentation: {
      title: "Structure and documentation",
      body:
        "Solutions that make it easy to track work, decisions, and changes — and retrieve it when it actually matters.",
    },

    realWorld: {
      title: "Tools that handle real life",
      body:
        "Built for daily use under time pressure, changes, and real-world constraints — not for perfect demo scenarios.",
    },
  },

  principles: {
    singleSource: {
      title: "One source of truth",
      body:
        "No duplicated logic, no hidden magic. What applies, applies — and can be explained, debugged, and trusted.",
    },
    predictability: {
      title: "Predictability over wow",
      body:
        "The same action produces the same result. Design and engineering must align — or it doesn’t ship.",
    },
    respect: {
      title: "Respect for time and headspace",
      body:
        "Anything that steals focus without adding value is a bug. The goal is calm confidence: “it just works”.",
    },
  },

  audience:
    "Tools for people who work in a structured way with projects, follow-up, and delivery — and who want overview, control, and documentation without the tool becoming a burden.",
},
  
} as const;

export default en;
