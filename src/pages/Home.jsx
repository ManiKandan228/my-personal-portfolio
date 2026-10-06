import { Link } from "react-router-dom";
import { projects, profile, socials } from "../data/content";

const featured = projects.filter((p) => p.featured);
const social = (label) => socials.find((s) => s.label === label)?.url || "#";

export default function Home() {
  return (
    <div className="prose-col pt-20 pb-20 sm:pt-28 sm:pb-24">
      <h1 className="mb-8">{profile.name}</h1>

      <p className="mb-6">
        I'm a software engineer focused on AI systems and full-stack product
        engineering. I work at{" "}
        <a href="https://iamneo.ai/" target="_blank" rel="noreferrer">
          iamneo
        </a>
        , an NIIT Venture, where I build voice-driven interview agents in Python
        and the platforms behind enterprise hiring — including a hiring
        platform's 2.0 revamp, which I helped build and then single-handedly
        stabilized across frontend, backend, and infrastructure once it went
        live.
      </p>

      <p className="mb-6">
        My path was simple: I started full-stack on the MERN stack, spent a
        stretch fully on the frontend, then moved back into backend and AI.
        These days I mostly build AI agents in Python — custom TTS/STT pipelines,
        real-time voice agents over WebSockets, and the systems behind them. I'm
        not a super-duper computer, just a genuine hard worker who ships and owns
        what he builds.
      </p>

      <p className="mb-4">Some of the work I'm most proud of:</p>

      <ul className="list-square mb-8">
        {featured.map((p) => (
          <li key={p.id}>
            <Link to={`/work#${p.id}`}>{p.name}</Link>
            {p.tag.includes("🏆") ? " — 🏆 2nd, ElevenLabs Worldwide Hackathon" : ` — ${p.org}`}
          </li>
        ))}
      </ul>

      <p>
        You can read more <Link to="/about">about me</Link>, see all of{" "}
        <Link to="/work">my work</Link>, or find me on{" "}
        <a href={social("GitHub")} target="_blank" rel="noreferrer">
          GitHub
        </a>
        ,{" "}
        <a href={social("LinkedIn")} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        , and{" "}
        <a href={social("X")} target="_blank" rel="noreferrer">
          X
        </a>
        . <a href={`mailto:${profile.email}`}>Reach out</a> if you'd like to
        build something.
      </p>
    </div>
  );
}
