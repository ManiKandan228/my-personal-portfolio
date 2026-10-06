import { Link } from "react-router-dom";
import { projects } from "../data/content";

export default function Work() {
  return (
    <div className="prose-col pt-14 pb-20 sm:pt-20 sm:pb-24">
      <p className="muted mb-10">
        <Link to="/" className="no-underline-link muted">
          ← Manikandan P
        </Link>
      </p>

      <h1 className="mb-6">Work</h1>
      <p className="mb-12">
        A selection of products I've owned end to end — from the candidate-facing
        experience down to the concurrency that keeps them up.
      </p>

      {projects.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={i > 0 ? "rule pt-12 mt-12 scroll-mt-8" : "scroll-mt-8"}
        >
          <h2 className="mb-1">{p.name}</h2>
          <p className="meta mb-5">
            {p.org} · {p.year} · {p.tag}
          </p>

          <p className="mb-4">{p.summary}</p>

          {p.image && (
            <figure className="my-7">
              <img
                src={p.image}
                alt={p.name}
                className="w-full rounded-lg"
                loading="lazy"
                onError={(e) =>
                  (e.currentTarget.parentElement.style.display = "none")
                }
              />
              {p.caption && (
                <figcaption className="meta mt-2 text-center">
                  {p.caption}
                </figcaption>
              )}
            </figure>
          )}

          <p className="mb-4">
            <strong>The problem. </strong>
            {p.problem}
          </p>
          <p className="mb-4">
            <strong>What I built. </strong>
            {p.build}
          </p>
          <p className="mb-2">
            <strong>Impact.</strong>
          </p>
          <ul className="list-square mb-4">
            {p.impact.map((it, j) => (
              <li key={j}>{it}</li>
            ))}
          </ul>

          <p className="meta">{p.stack.join(" · ")}</p>
        </section>
      ))}

      <p className="mt-14">
        <Link to="/about">← About me</Link>
      </p>
    </div>
  );
}
