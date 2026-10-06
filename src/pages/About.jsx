import { Link } from "react-router-dom";
import { about, experience, skills, testimonials } from "../data/content";

export default function About() {
  return (
    <div className="prose-col pt-14 pb-20 sm:pt-20 sm:pb-24">
      <p className="muted mb-10">
        <Link to="/" className="no-underline-link muted">
          ← Manikandan P
        </Link>
      </p>

      <h1 className="mb-8">About me</h1>

      {about.map((p, i) => (
        <p key={i} className="mb-6">
          {p}
        </p>
      ))}

      <h2 className="mt-14 mb-6">Experience</h2>
      {experience.map((job, i) => (
        <div key={i} className="mb-8">
          <p className="mb-1">
            <strong>{job.role}</strong> ·{" "}
            <a href={job.companyUrl} target="_blank" rel="noreferrer">
              {job.company}
            </a>
          </p>
          <p className="meta mb-2">
            {job.period} · {job.location}
          </p>
          <ul className="list-square">
            {job.points.map((pt, j) => (
              <li key={j}>{pt}</li>
            ))}
          </ul>
        </div>
      ))}

      <h2 className="mt-14 mb-6">What I work with</h2>
      {skills.map((s) => (
        <p key={s.group} className="mb-2">
          <strong>{s.group}.</strong> {s.items.join(", ")}.
        </p>
      ))}

      <h2 className="mt-14 mb-4">Education</h2>
      <p>
        B.E. Computer Science &amp; Engineering, Saveetha Engineering College,
        Chennai (2021–2025). First Class Distinction — 8.7 CGPA.
      </p>

      <h2 className="mt-14 mb-6">Kind words</h2>
      {testimonials.map((t, i) => (
        <blockquote
          key={i}
          className={i > 0 ? "rule pt-6 mt-6" : ""}
        >
          <p className="mb-2" style={{ fontStyle: "italic" }}>
            “{t.quote}”
          </p>
          <p className="meta">
            — {t.name ? `${t.name}, ` : ""}
            {t.title}
          </p>
        </blockquote>
      ))}

      <p className="mt-12">
        <Link to="/work">See my work →</Link>
      </p>
    </div>
  );
}
