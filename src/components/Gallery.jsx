import gallery from "../data/gallery.json";

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <div className="section-header">
        <div className="section-title">
          Gallery & media
          <span>Talks, labs, and project snapshots</span>
        </div>
        <div className="section-tag">Screenshots · Videos · Trainings</div>
      </div>

      <div className="gallery-grid">
        <div className="gallery-main">
          <div className="media-card">
            <strong className="media-title">Featured video</strong>

            <div className="media-thumb">
              <img
                src="/images/thumbnails/featured-video.jpg"
                alt="Featured video"
                className="media-thumb-img"
              />
            </div>

            <p className="media-text">
              Use this area to showcase a high‑impact story — for example, how you moved a district
              online during Covid, or how your career guidance platform connects students with real
              opportunities.
            </p>

            <div className="media-links">
              <a
                href="https://your-main-video.example"
                target="_blank"
                rel="noreferrer"
                className="media-link"
              >
                Watch full video
              </a>
            </div>
          </div>
        </div>

        <div className="gallery-side">
          {gallery.map((g) => (
            <div key={g.title} className="media-card">
              <strong className="media-title">{g.title}</strong>

              <div className="media-thumb short">
                <img src={g.image} alt={g.title} className="media-thumb-img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
