import skills from "../data/skills.json";

export default function Skills() {
  return (
    <section className="section">
      <div className="section-header">
        <div className="section-title">
          Skills & ecosystem
          <span>Engineering depth with modern tools</span>
        </div>
        <div className="section-tag">Civil · Digital · Business</div>
      </div>

      <div className="skills-grid">
        {skills.map((group) => (
          <div key={group.category} className="skills-card">
            <h4>{group.category}</h4>

            <div className="skills-list">
              {group.items.map((item) => (
                <span key={item} className="skills-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
