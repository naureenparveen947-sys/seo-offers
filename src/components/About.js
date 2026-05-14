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

const aboutGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
  gap: "70px",
  width: "100%",
  alignItems: "center",
};

const heading = {
  fontFamily: "Georgia, serif",
  fontSize: "clamp(56px,8vw,110px)",
  lineHeight: "0.95",
  fontWeight: 400,
  marginBottom: "28px",
};

const text = {
  color: "#aaa",
  lineHeight: "1.9",
  fontSize: "18px",
  maxWidth: "620px",
};

const glassCard = {
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "36px",
  padding: "50px",
  backdropFilter: "blur(14px)",
};

const serviceItem = {
  marginBottom: "34px",
};

const serviceTitle = {
  fontFamily: "Georgia, serif",
  fontSize: "30px",
  marginBottom: "12px",
};

const serviceText = {
  color: "#9d9d9d",
  lineHeight: "1.8",
  fontSize: "16px",
};