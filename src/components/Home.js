import Sphere from "./Sphere";

export function Home() {
  return (
    <>
      <section id="home" style={homeSection}>
        <Sphere />

        <div style={overlay}></div>

        <div style={leftText}>
          <p style={smallText}>01 — DISCIPLINE</p>

          <h1 style={leftHeading}>
            SYSTEM
            <br />
            <em>ARCHITECT</em>
          </h1>
        </div>

        <div style={rightText}>
          <p style={smallText}>02 — CRAFT</p>

          <h1 style={rightHeading}>
            INTERFACE
            <br />
            <em>DESIGNER</em>
          </h1>
        </div>

        <button style={centerBtn}>INITIALIZE</button>
      </section>

      <section style={bridgeSection}>
        <div style={bridgeLine}></div>

        <p style={bridgeText}>
          STRATEGY • DESIGN • SEO • GROWTH
        </p>

        <div style={bridgeCards}>
          <div style={miniCard}>01 / Brand Systems</div>

          <div style={miniCard}>02 / SEO Architecture</div>

          <div style={miniCard}>03 / Web Experiences</div>
        </div>
      </section>
    </>
  );
}

const homeSection = {
  minHeight: "100vh",
  background: "#050505",
  color: "white",
  position: "relative",
  overflow: "hidden",
};

const overlay = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.75))",
  zIndex: 1,
};

const leftText = {
  position: "absolute",
  top: "24%",
  left: "4%",
  zIndex: 3,
};

const rightText = {
  position: "absolute",
  right: "4%",
  bottom: "10%",
  zIndex: 3,
  textAlign: "right",
};

const smallText = {
  color: "#9a9a9a",
  letterSpacing: "8px",
  fontSize: "13px",
  marginBottom: "24px",
};

const leftHeading = {
  fontFamily: "Georgia, serif",
  fontSize: "clamp(64px, 8vw, 120px)",
  lineHeight: "0.9",
  fontWeight: 400,
  margin: 0,
};

const rightHeading = {
  fontFamily: "Georgia, serif",
  fontSize: "clamp(64px, 8vw, 120px)",
  lineHeight: "0.9",
  fontWeight: 400,
  margin: 0,
};

const centerBtn = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 4,
  padding: "20px 54px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.14)",
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
  backdropFilter: "blur(12px)",
  color: "white",
  fontWeight: "bold",
  letterSpacing: "2px",
  cursor: "pointer",
};

const bridgeSection = {
  position: "relative",
  zIndex: 5,
  background: "#050505",
  padding: "70px 8% 110px",
};

const bridgeLine = {
  width: "100%",
  height: "1px",
  background:
    "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
  marginBottom: "38px",
};

const bridgeText = {
  textAlign: "center",
  color: "#888",
  letterSpacing: "8px",
  fontSize: "12px",
  marginBottom: "38px",
};

const bridgeCards = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "20px",
  maxWidth: "1100px",
  margin: "0 auto",
};

const miniCard = {
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "28px",
  padding: "28px",
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015))",
  backdropFilter: "blur(12px)",
  color: "#ddd",
  fontFamily: "Georgia, serif",
  fontSize: "22px",
};