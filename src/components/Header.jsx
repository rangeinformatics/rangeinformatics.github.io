import useTheme from "../hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-left">
        <div className="avatar">
          <img src="/images/avatar/adil.jpg" alt="Adil" />
        </div>

        <div className="identity">
          <div className="identity-main">
            <h1>Adil</h1>
            <div className="logo-badge">
              <span className="logo-mark" />
              <span>Alphabudzz · Range Informatics</span>
            </div>
          </div>
          <span>Civil Engineer · Project Manager · EdTech & SaaS Founder</span>
        </div>
      </div>

      <nav>
        <a href="#about">About</a>
        <a href="#projects">Products</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>

        <button className="theme-toggle" onClick={toggleTheme}>
          <div className="theme-toggle-thumb" />
          <span className="theme-toggle-icon sun">☀️</span>
          <span className="theme-toggle-icon moon">🌙</span>
        </button>
      </nav>
    </header>
  );
}
