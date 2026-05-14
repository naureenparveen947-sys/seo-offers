export function Contact() {
  return (
    <section id="contact" style={contactSection}>
      <p style={tag}>CONTACT</p>

      <h2 style={heading}>
        Let’s build
        <br />
        something unforgettable.
      </h2>

      <p style={subText}>
        Want to improve your website, SEO rankings, or digital presence?
        Let’s discuss your project and create something impactful.
      </p>

      <div style={contactGrid}>
        <div style={infoCard}>
          <div style={infoItem}>
            <p style={infoLabel}>EMAIL</p>
            <h3 style={infoValue}>hello@seooffers.com</h3>
          </div>

          <div style={infoItem}>
            <p style={infoLabel}>LOCATION</p>
            <h3 style={infoValue}>Worldwide Remote Studio</h3>
          </div>

          <div style={infoItem}>
            <p style={infoLabel}>SERVICES</p>
            <h3 style={infoValue}>
              SEO • Web Design • Marketing
            </h3>
          </div>
        </div>

        <form style={glassForm}>
          <input
            placeholder="Your Name"
            style={inputStyle}
          />

          <input
            placeholder="Your Email"
            style={inputStyle}
          />

          <textarea
            rows="6"
            placeholder="Tell me about your project..."
            style={inputStyle}
          />

          <button style={ctaBtn}>
            GET FREE AUDIT
          </button>
        </form>
      </div>
    </section>
  );
}

const contactSection = {
  minHeight: "100vh",
  background: "#050505",
  color: "white",
  padding: "140px 8%",
  borderTop: "1px solid rgba(255,255,255,0.08)",
};

const tag = {
  color: "#888",
  letterSpacing: "10px",
  fontSize: "13px",
  marginBottom: "34px",
};

const heading = {
  fontFamily: "Georgia, serif",
  fontSize: "clamp(56px,8vw,110px)",
  lineHeight: "0.95",
  fontWeight: 400,
  marginBottom: "26px",
};

const subText = {
  color: "#aaa",
  maxWidth: "720px",
  lineHeight: "1.9",
  marginBottom: "70px",
  fontSize: "18px",
};

const contactGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
  gap: "28px",
};

const infoCard = {
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "36px",
  padding: "42px",
  backdropFilter: "blur(14px)",
};

const infoItem = {
  marginBottom: "42px",
};

const infoLabel = {
  color: "#777",
  letterSpacing: "4px",
  fontSize: "12px",
  marginBottom: "12px",
};

const infoValue = {
  fontFamily: "Georgia, serif",
  fontSize: "32px",
  fontWeight: 400,
  lineHeight: "1.3",
};

const glassForm = {
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "36px",
  padding: "42px",
  display: "grid",
  gap: "20px",
  backdropFilter: "blur(14px)",
};

const inputStyle = {
  padding: "20px",
  borderRadius: "20px",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.04)",
  color: "white",
  outline: "none",
  fontSize: "16px",
};

const ctaBtn = {
  padding: "18px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.12)",
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.05))",
  color: "white",
  fontWeight: "bold",
  letterSpacing: "2px",
  cursor: "pointer",
  marginTop: "10px",
};