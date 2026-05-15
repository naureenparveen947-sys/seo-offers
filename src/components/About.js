export function About() {
  return (
    <section id="about" style={aboutSection}>
      <p style={tag}>ABOUT</p>

      <div style={aboutGrid}>
        <div>
          <h2 style={heading}>
            Creating Digital
            <br />
            Experiences That Convert.
          </h2>

          <p style={text}>
            We help brands grow through modern website design,
            SEO optimization, and powerful digital strategies.
            Our goal is to build experiences that attract,
            engage, and convert users into customers.
          </p>
        </div>

        <div style={glassCard}>
          <div style={serviceItem}>
            <h3 style={serviceTitle}>SEO Optimization</h3>
            <p style={serviceText}>
              Improve rankings and visibility with premium SEO systems.
            </p>
          </div>

          <div style={serviceItem}>
            <h3 style={serviceTitle}>Modern UI Design</h3>
            <p style={serviceText}>
              Cinematic futuristic website experiences for modern brands.
            </p>
          </div>

          <div style={serviceItem}>
            <h3 style={serviceTitle}>Growth Strategy</h3>
            <p style={serviceText}>
              Data-driven branding and scalable digital direction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const aboutSection = {
  // ✅ minHeight "100vh" hata diya — extra space gone
  background: "#050505",
  color: "white",
  // ✅ 140px → clamp se mobile pe 60px, desktop pe 100px
  padding: "clamp(60px, 8vw, 100px) clamp(20px, 6%, 80px)",
  borderTop: "1px solid rgba(255,255,255,0.08)",
};

const tag = {
  color: "#888",
  letterSpacing: "10px",
  // ✅ font thoda bada kiya readability ke liye
  fontSize: "clamp(11px, 1.5vw, 13px)",
  marginBottom: "clamp(20px, 3vw, 34px)",
};

const aboutGrid = {
  display: "grid",
  // ✅ mobile pe single column, desktop pe 2 column
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  // ✅ gap 70px → clamp se mobile pe 30px
  gap: "clamp(30px, 5vw, 70px)",
  width: "100%",
  alignItems: "center",
};

const heading = {
  fontFamily: "Georgia, serif",
  // ✅ 56px minimum bahut bada tha — 28px se start karo
  fontSize: "clamp(28px, 5vw, 72px)",
  lineHeight: "1.05",
  fontWeight: 400,
  marginBottom: "clamp(16px, 2vw, 28px)",
};

const text = {
  color: "#aaa",
  lineHeight: "1.9",
  // ✅ font responsive kiya
  fontSize: "clamp(14px, 1.8vw, 18px)",
  maxWidth: "620px",
};

const glassCard = {
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "clamp(20px, 3vw, 36px)",
  // ✅ padding 50px → mobile pe 24px
  padding: "clamp(24px, 4vw, 50px)",
  backdropFilter: "blur(14px)",
};

const serviceItem = {
  // ✅ margin kam kiya
  marginBottom: "clamp(20px, 3vw, 34px)",
};

const serviceTitle = {
  fontFamily: "Georgia, serif",
  // ✅ 30px → responsive
  fontSize: "clamp(18px, 2.5vw, 28px)",
  marginBottom: "clamp(8px, 1vw, 12px)",
};

const serviceText = {
  color: "#9d9d9d",
  lineHeight: "1.8",
  // ✅ responsive font
  fontSize: "clamp(13px, 1.5vw, 16px)",
};