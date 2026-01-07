import projects from "../data/projects.json";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <div className="section-title">
          Products & platforms
          <span>Built for schools, students, and small businesses</span>
        </div>
        <div className="section-tag">Investable SaaS · Practical solutions</div>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <div className="project-image-wrapper">
              <img src={p.image} alt={p.title} className="project-img" />
            </div>

            <div className="project-content">
              <div className="project-eyebrow">{p.category}</div>
              <div className="project-title">{p.title}</div>
              <p>{p.description}</p>

              <div className="project-links">
                {p.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
