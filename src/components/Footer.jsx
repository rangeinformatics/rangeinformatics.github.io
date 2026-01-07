export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <span>
          © {new Date().getFullYear()} Adil · Alphabudzz · Range Informatics
        </span>

        <div className="footer-brands">
          <span className="footer-pill">Civil · Utility · Telecom</span>
          <span className="footer-pill">EdTech & Career Platforms</span>
          <span className="footer-pill">Ethical & impact‑driven work</span>
        </div>
      </div>

      <div className="footer-right">
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noreferrer"
          >
            in
          </a>

          <a href="https://github.com/rangeinformatics" target="_blank" rel="noreferrer">
            GH
          </a>

          <a href="https://twitter.com/your-handle" target="_blank" rel="noreferrer">
            X
          </a>

          <a href="https://aadil.rangeinfo.pro" target="_blank" rel="noreferrer">
            🌐
          </a>
        </div>

        <div className="footer-links">
          <a href="https://rangeinformatics.com" target="_blank" rel="noreferrer">
            Range Informatics
          </a>{" "}
          ·{" "}
          <a href="https://rangecivil.com" target="_blank" rel="noreferrer">
            Range Civil
          </a>{" "}
          ·{" "}
          <a href="https://alphabudzz.com" target="_blank" rel="noreferrer">
            Alphabudzz
          </a>
        </div>
      </div>
    </footer>
  );
}
