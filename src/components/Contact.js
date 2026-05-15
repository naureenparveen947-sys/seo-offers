export function Contact() {
  return (
    <section id="contact" style={contactSection}>
      <p style={tag}>CONTACT</p>

      <h2 style={heading}>
        Let's build
        <br />
        something unforgettable.
      </h2>

      <p style={subText}>
        Want to improve your website, SEO rankings, or digital presence?
        Let's discuss your project and create something impactful.
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
            <h3 style={infoValue}>SEO • Web Design • Marketing</h3>
          </div>
        </div>

        <form style={glassForm}>
          <input placeholder="Your Name" style={inputStyle} />
          <input placeholder="Your Email" style={inputStyle} />
          <textarea
            rows="6"
            placeholder="Tell me about your project..."
            style={inputStyle}
          />
          <button style={ctaBtn}>GET FREE AUDIT</button>
        </form>
      </div>
    </section>
  );
}

const contactSection = {
  // ✅ minHeight "100vh" hata diya
  background: "#050505",
  color: "white",
  // ✅ 140px → clamp
  padding: "clamp(60px, 8vw, 100px) clamp(20px, 6%, 80px)",
  borderTop: "1px solid rgba(255,255,255,0.08)",
};

const tag = {
  color: "#888",
  letterSpacing: "10px",
  fontSize: "clamp(11px, 1.5vw, 13px)",
  marginBottom: "clamp(20px, 3vw, 34px)",
};

const heading = {
  fontFamily: "Georgia, serif",
  // ✅ 56px → 28px minimum
  fontSize: "clamp(28px, 5vw, 72px)",
  lineHeight: "1.05",
  fontWeight: 400,
  marginBottom: "clamp(16px, 2vw, 26px)",
};

const subText = {
  color: "#aaa",
  maxWidth: "720px",
  lineHeight: "1.9",
  // ✅ 70px → responsive
  marginBottom: "clamp(30px, 5vw, 60px)",
  // ✅ 18px → responsive
  fontSize: "clamp(14px, 1.6vw, 18px)",
};

const contactGrid = {
  display: "grid",
  // ✅ mobile pe single column
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "clamp(16px, 2vw, 28px)",
};

const infoCard = {
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "clamp(20px, 3vw, 36px)",
  // ✅ 42px → mobile pe 22px
  padding: "clamp(22px, 4vw, 42px)",
  backdropFilter: "blur(14px)",
};

const infoItem = {
  // ✅ 42px → responsive
  marginBottom: "clamp(24px, 3.5vw, 42px)",
};

const infoLabel = {
  color: "#777",
  letterSpacing: "4px",
  fontSize: "clamp(10px, 1.2vw, 12px)",
  marginBottom: "clamp(8px, 1vw, 12px)",
};

const infoValue = {
  fontFamily: "Georgia, serif",
  // ✅ 32px → responsive
  fontSize: "clamp(18px, 2.5vw, 30px)",
  fontWeight: 400,
  lineHeight: "1.3",
};

const glassForm = {
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "clamp(20px, 3vw, 36px)",
  // ✅ 42px → mobile pe 22px
  padding: "clamp(22px, 4vw, 42px)",
  display: "grid",
  gap: "clamp(12px, 1.5vw, 20px)",
  backdropFilter: "blur(14px)",
};

const inputStyle = {
  // ✅ padding responsive
  padding: "clamp(14px, 2vw, 20px)",
  borderRadius: "clamp(14px, 2vw, 20px)",
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.04)",
  color: "white",
  outline: "none",
  // ✅ font responsive
  fontSize: "clamp(13px, 1.5vw, 16px)",
  // ✅ width overflow rokne ke liye
  width: "100%",
  boxSizing: "border-box",
};

const ctaBtn = {
  // ✅ padding responsive
  padding: "clamp(12px, 2vw, 18px)",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.12)",
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.05))",
  color: "white",
  fontWeight: "bold",
  letterSpacing: "2px",
  cursor: "pointer",
  marginTop: "clamp(6px, 1vw, 10px)",
  fontSize: "clamp(11px, 1.3vw, 13px)",
  // ✅ full width button
  width: "100%",
};