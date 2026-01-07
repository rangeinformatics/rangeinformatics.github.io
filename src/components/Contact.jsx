export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-header">
        <div className="section-title">
          Let’s talk
          <span>Roles, collaborations, or investment conversations</span>
        </div>
        <div className="section-tag">
          Open to: PM roles · EdTech leadership · Strategic partnerships
        </div>
      </div>

      <div className="contact-strip">
        <p>
          I’m interested in roles where I can combine civil/project experience with digital
          transformation, or in partners/investors who want to grow EdTech and SaaS platforms that
          genuinely serve students, schools, and communities.
        </p>

        <div className="contact-cta">
          <a
            href="mailto:you@example.com?subject=Let%27s%20discuss%20an%20opportunity"
            className="btn btn-primary"
          >
            Email me
          </a>

          <a
            href="https://your-calendar-link.example"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
}
