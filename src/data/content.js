// ============================================================
//  EDIT EVERYTHING HERE.
//  All site copy lives in this one file so you can tweak text,
//  add projects, swap links, and update metrics without touching
//  any layout/markup.
//
//  IMAGES: drop the file in src/assets/, import it at the top here
//  (like hackathonImg below), then set `image: <thatVar>` on a project.
//  Add an optional `caption: "..."` to show a line under the photo.
// ============================================================

import hackathonImg from "../assets/hackathon.jpeg";

export const profile = {
  name: "Manikandan P",
  // The one-line identity shown under the name (the "headline")
  role: "Software Engineer",
  tagline:
    "I build AI systems, real-time voice agents, and platforms that hold up under real load.",
  location: "Chennai, India",
  available: "Open to building ambitious products",
  email: "manikandan.ps228@gmail.com",
  phone: "+91 63845 96140",
  resumeUrl: "", // drop a /resume.pdf into /public and put "/resume.pdf" here
};

export const socials = [
  { label: "GitHub", handle: "ManiKandan228", url: "https://github.com/ManiKandan228" },
  { label: "LinkedIn", handle: "manikandan-p", url: "https://www.linkedin.com/in/manikandan-p-41b320246/" },
  { label: "X", handle: "@itz_mani22", url: "https://x.com/itz_mani22" },
  { label: "Email", handle: "manikandan.ps228@gmail.com", url: "mailto:manikandan.ps228@gmail.com" },
];

// ---------- HOME: short intro paragraphs ----------
export const intro = [
  "I'm a software engineer at **iamneo — an NIIT Venture**, where I build the AI and platform layers behind enterprise hiring software used by companies to run campus, walk-in, and high-volume recruitment.",
  "My path was simple: I started full-stack on the **MERN** stack, spent a stretch fully on the **frontend** — I revamped an enterprise hiring platform's entire UI without a dedicated designer — then moved back into **backend** and AI. Today I mostly build **AI agents in Python** — voice-driven interview agents, custom TTS/STT pipelines, and the real-time systems behind them.",
  "I care about ownership over tickets, signal over noise, and shipping things people actually use.",
];

// Quick stat strip on the home page
export const stats = [
  { value: "200K+", label: "Concurrent users handled" },
  { value: "2nd", label: "ElevenLabs Worldwide Hackathon" },
  { value: "8.7", label: "CGPA — First Class Distinction" },
  { value: "3", label: "AI products shipped to customers" },
];

// ---------- WORK: project case studies ----------
export const projects = [
  {
    id: "ai-interview",
    name: "AI Interview Agent",
    org: "Enterprise Hiring Platform",
    year: "2025",
    tag: "Voice AI · Agents",
    featured: true,
    summary:
      "An autonomous voice agent that conducts first-round screening interviews end to end, then returns a defensible hire / no-hire report backed by evidence.",
    problem:
      "Recruiters were burning hours on initial screening across far too many candidates. The signal was low and the cost was high.",
    build:
      "I designed and built the feature across the stack — the candidate-facing interview experience, the FastAPI backend, and the AI layer wiring a custom model with LLM reasoning and real-time voice (ElevenLabs, Sarvam AI, Grok). The agent runs a live, two-way spoken interview over WebSockets, scores responses, and produces a structured report with evidence on whether a candidate is a fit.",
    impact: [
      "Removed the manual first-round screening bottleneck for recruiters",
      "Shipped to customers and improved screening outcomes, which led to the next product",
      "Every verdict is backed by recorded evidence, not a black box",
    ],
    stack: ["FastAPI", "LLMs", "ElevenLabs", "Sarvam AI", "WebSockets", "PostgreSQL", "GCP"],
  },
  {
    id: "mock-interview",
    name: "AI Mock Interview",
    org: "Placement Prep Platform",
    year: "2025",
    tag: "Voice AI · Custom Models",
    featured: true,
    summary:
      "A practice-interview agent for students preparing for placements — built entirely on custom speech-to-text and text-to-speech models, with memory that compounds across sessions.",
    problem:
      "First-time candidates freeze in real placement interviews. They needed realistic, repeatable practice with honest feedback.",
    build:
      "Built on custom TTS and STT pipelines so the conversation feels natural and stays fully controllable. The agent conducts a mock interview, generates a detailed report, and maintains a per-candidate skill repository — feeding prior interviews into each new one so the agent adapts to the student's progress over time.",
    impact: [
      "Gives students a realistic, judgement-free way to rehearse placement interviews",
      "Per-candidate skill memory makes every successive session sharper",
      "Deepened my hands-on foundation in GenAI and LangChain",
    ],
    stack: ["Custom TTS/STT", "LangChain", "FastAPI", "Angular", "PostgreSQL", "Redis"],
  },
  {
    id: "lsrw",
    name: "LSRW Diagnostic & Placement",
    org: "Language Assessment Platform",
    year: "2026 · In progress",
    tag: "AI · Language Assessment",
    featured: true,
    summary:
      "An English proficiency test that evaluates candidates across Listening, Reading, Speaking, and Writing, then places them on a CEFR level from a single composite score.",
    problem:
      "Hiring and training teams needed one reliable signal for a candidate's overall English communication ability — not four disconnected skill scores, and not a flattering peak-skill number.",
    build:
      "The platform scores each of the four skills individually, then averages them into an overall composite that drives CEFR placement. Placement is deliberately based on the composite, not the strongest skill — so a strong Speaking score can't mask weak Writing. It ships with per-skill result analysis so a candidate sees exactly where they stand across all four.",
    impact: [
      "One composite score → a clear CEFR level (A1–C1) and track (Quick / Standard)",
      "Result analysis across all four skills, not just a single overall number",
      "Measures real communication ability by design — resistant to single-skill gaming",
    ],
    stack: ["Python", "FastAPI", "LLMs", "Speech (STT / TTS)", "Angular", "PostgreSQL"],
  },
  {
    id: "hiring-platform-2",
    name: "Hiring Platform 2.0",
    org: "Enterprise Hiring Platform",
    year: "2025",
    tag: "Platform · Scale",
    featured: true,
    summary:
      "The 2.0 product revamp of an enterprise hiring platform. I owned the frontend rewrite and contributed to the backend — then, after it went live, single-handedly handled and stabilized the whole product at a scale of 200K+ concurrent users.",
    problem:
      "The platform needed a full 2.0 generation: a rebuilt product, new modules, and infrastructure that could survive mass campus and walk-in drives without falling over — and once live, it had to actually stay up under that load.",
    build:
      "I learned Angular + TypeScript in a month and shipped the complete UI revamp — new user modules, the migration, and a live dashboard — while contributing across the FastAPI backend. Once the product went live, I took it on single-handedly across frontend, backend, and the GCP infrastructure to keep it stable under real load.",
    impact: [
      "After go-live, single-handedly stabilized the 2.0 product across frontend, backend, and infra",
      "Held up at 200K+ concurrent users across registration, OTP delivery, test-taking, and submission",
      "Tuned concurrency with horizontal pod autoscaling (HPA) on GKE",
    ],
    stack: ["Angular", "TypeScript", "FastAPI", "GCP / GKE", "Redis", "CI/CD"],
  },
  {
    id: "ai-standup",
    name: "AI Standup Co-Pilot",
    org: "Team Neo · ElevenLabs Hackathon",
    year: "2025",
    tag: "🏆 2nd Prize · Voice AI",
    featured: true,
    image: hackathonImg,
    caption:
      "Team Neo receiving 2nd Prize at the ElevenLabs Worldwide Hackathon — Bengaluru, 11 December 2025.",
    summary:
      "An AI assistant that runs your daily standup end to end. Second Prize at the ElevenLabs Worldwide Hackathon — Bengaluru, across a global event spanning 33 cities.",
    problem:
      "Status updates are fatigue. Engineers repeat themselves, blockers get lost, and PMs chase signal that should arrive on its own.",
    build:
      "It joins the meeting, talks to each engineer, and captures progress and blockers in conversation. It then updates the project-management tool automatically, raises escalation tickets when something is blocked, and sends clean, structured summaries to PMs over Microsoft Teams and email.",
    impact: [
      "🏆 Second Prize — ElevenLabs Worldwide Hackathon, Bengaluru chapter",
      "Competed against strong builders in a global event across 33 cities",
      "Turned standup status fatigue into clean signal and automatic action",
    ],
    stack: ["Voice Agents", "LLMs", "ElevenLabs", "MS Teams API", "FastAPI"],
  },
  {
    id: "interview-insights",
    name: "Interview Insights",
    org: "Enterprise Hiring Platform",
    year: "2025",
    tag: "AI · Analytics",
    featured: false,
    summary:
      "An analytics layer over the AI and mock interview products that turns interview recordings into computed, actionable insight.",
    problem:
      "Recordings held a lot of signal but no one had time to mine it manually.",
    build:
      "Built a pipeline that ingests interview recordings and computes insights across both AI and mock interviews — surfacing patterns and outcomes that humans would otherwise miss.",
    impact: [
      "Converts raw recordings into structured, decision-ready insight",
      "Works across both the AI Interview and Mock Interview products",
    ],
    stack: ["Python", "LLMs", "FastAPI", "PostgreSQL"],
  },
];

// ---------- EXPERIENCE timeline ----------
export const experience = [
  {
    role: "Software Engineer",
    company: "iamneo — an NIIT Venture",
    companyUrl: "https://iamneo.ai/",
    period: "Present",
    location: "Chennai",
    points: [
      "Moved into backend and AI engineering — designed and shipped the AI Interview voice agent and the Mock Interview product in Python (FastAPI), built on custom TTS/STT, LLMs, and LangChain.",
      "Built real-time voice sessions over WebSockets where candidates interact live with autonomous interview agents.",
      "Contributed across both frontend (Angular) and backend, not just one side — comfortable owning a feature end to end.",
      "Shipped Interview Insights — computing structured insight from interview recordings across both AI products.",
      "Owned concurrency and reliability on GCP/GKE with horizontal pod autoscaling, Redis, and automated CI/CD via GitHub Actions.",
    ],
  },
  {
    role: "Trainee Full-Stack Engineer",
    company: "iamneo — an NIIT Venture",
    companyUrl: "https://iamneo.ai/",
    period: "Feb 2025 — Aug 2025",
    location: "Chennai",
    points: [
      "Owned the Hiring Platform 2.0 frontend rewrite — learned Angular + TypeScript in a month and delivered the UI revamp, new modules, and migration, while contributing across the FastAPI backend.",
      "Designed the new UI without a dedicated designer — working only from requirements and the team — recognized by product leadership as clean, professional, and studio-quality.",
      "After the product went live, single-handedly handled and stabilized it across frontend, backend, and infrastructure — keeping it up at 200K+ concurrent users across registration, OTP delivery, assessment, and submission.",
    ],
  },
];

// ---------- ABOUT: long-form narrative ----------
export const about = [
  "I'm Manikandan P — a developer who builds AI agents and full-stack products. I like work that runs the whole way down: from a clean, thought-through UI to the backend and infrastructure that keep it live for real users.",
  "My path was simple. I started full-stack on the MERN stack, spent a stretch fully on the frontend, then moved back into backend and AI — so I'm comfortable across the stack, with Python as my main language today. I graduated from Saveetha Engineering College, Chennai, with a B.E. in Computer Science and Engineering (First Class Distinction, 8.7 CGPA), but most of what I know came from shipping things with real users on the other end.",
  "I also design as I build. On the hiring platform I revamped the entire UI without a dedicated designer — just the requirements and the team — and it shipped clean, professional, and intuitive. Good UX and product sense matter to me as much as the code does.",
  "To be honest, I'm not a super-duper computer — just a genuine hard worker who ships and owns what he builds. (That's roughly how my managers and leaders describe me too.)",
  "These days I mostly build AI agents in Python — voice-driven interview agents, custom speech (TTS/STT) pipelines, and the real-time systems behind them. Along the way my team took Second Prize at the ElevenLabs Worldwide Hackathon, and I was named Employee of the Month by the CEO.",
  "Outside work: cricket, playing and watching, and a lifelong Ilaiyaraaja fan — his music is usually on while I'm building. That's pretty much me.",
];

// ---------- SKILLS ----------
export const skills = [
  {
    group: "AI Engineering",
    items: ["LLMs & GenAI", "LangChain", "Voice Agents", "Custom TTS / STT", "ElevenLabs", "Sarvam AI", "Grok", "AI Integrations"],
  },
  {
    group: "Backend",
    items: ["Python", "FastAPI", "Node.js", "Express", "REST APIs", "WebSockets", "Concurrency"],
  },
  {
    group: "Frontend",
    items: ["Angular", "TypeScript", "React", "JavaScript", "MERN"],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
  },
  {
    group: "Cloud & Infra",
    items: ["GCP", "GKE / Kubernetes", "HPA Autoscaling", "CI/CD", "GitHub Actions"],
  },
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "SQL"],
  },
];

// ---------- AWARDS / RECOGNITION ----------
export const awards = [
  {
    title: "2nd Prize — ElevenLabs Worldwide Hackathon",
    org: "Bengaluru chapter · global event across 33 cities",
    detail: "Team Neo, for AI Standup Co-Pilot — a voice agent that runs daily standups end to end.",
    year: "2025",
  },
  {
    title: "Employee of the Month",
    org: "Awarded by the CEO · iamneo",
    detail: "“For showing up with purpose, delivering real impact, and setting the standard.”",
    year: "2025",
  },
  {
    title: "First Class Distinction — 8.7 CGPA",
    org: "B.E. Computer Science & Engineering",
    detail: "Saveetha Engineering College, Chennai · 2021 — 2025",
    year: "2025",
  },
];

// ---------- TESTIMONIALS ----------
export const testimonials = [
  {
    quote:
      "I've had the opportunity to manage Manikandan at iamneo, and he stands out for both his technical depth and his approach to problem-solving. He doesn't just execute on requirements — he consistently challenges assumptions and asks “why” before building. That focus on understanding the underlying business context helps him identify gaps early and deliver solutions that are actually meaningful, not just complete. Manikandan operates with strong ownership and a clear bias toward quality.",
    name: "Muniyappan Mani",
    title: "Lead Software Engineer, iamneo · Ex-Freshworks",
  },
  {
    quote:
      "I want to appreciate Manikandan for the incredible work transforming the UI of our hiring platform. What makes it remarkable is that he delivered this clean, professional, and intuitive interface without a dedicated UI designer — taking only the requirements and collaborating with the team, he produced designs that look like they came from a seasoned design studio. Despite being early in his career, Mani shows a maturity in UX and a level of “product common sense” that is rare to find. This is exactly the kind of ownership we foster in the PIE department.",
    name: "", // TODO: add your PM's name here
    title: "Product Management, iamneo",
  },

  // ----- Commented out until real quotes are collected -----
  // {
  //   quote:
  //     "One of the strongest young engineers I've worked with. He went from full-stack to building real AI voice agents in production, and he sweats the hard parts — concurrency, reliability, scale — without being asked.",
  //   name: "Sudharsan",
  //   title: "Head of Engineering, iamneo",
  // },
  // {
  //   quote:
  //     "Mani thinks like a product engineer, not just a coder. He understands why we're building something and ships features customers actually feel. A genuine multiplier on the team.",
  //   name: "Shreeharan",
  //   title: "Lead, Product Management, iamneo",
  // },
];
