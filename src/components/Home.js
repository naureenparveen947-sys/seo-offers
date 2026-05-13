import { SentientSphere } from "./SentientSphere";

const isMobile = window.innerWidth <= 768;
export function Home() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #1a1a1a 0%, #000 60%)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "160px 20px 120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {!isMobile && (
  <div
    style={{
      position: "absolute",
      width: "650px",
      height: "650px",
      opacity: 0.42,
      zIndex: 0,
      top: "52%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <SentientSphere />
  </div>
)}

      <div
        style={{
          maxWidth: "900px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <p style={{ color: "#888", letterSpacing: "4px", marginBottom: "20px" }}>
          SEO • WEB DESIGN • MARKETING
        </p>

        <h1 style={{ fontSize: "80px", lineHeight: "1", marginBottom: "24px" }}>
          Build A Brand
          <br />
          That Stands Out.
        </h1>

        <p
          style={{
            color: "#aaa",
            fontSize: "20px",
            lineHeight: "1.8",
            maxWidth: "700px",
            margin: "0 auto 40px",
          }}
        >
          We create modern websites, SEO strategies, and digital experiences
          that help businesses grow online.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          <button style={primaryBtn}>GET FREE AUDIT</button>
          <button style={secondaryBtn}>VIEW PROJECTS</button>
        </div>
      </div>
    </section>
  );
}

const primaryBtn = {
  padding: "16px 28px",
  borderRadius: "999px",
  border: "none",
  background: "white",
  color: "black",
  fontWeight: "bold",
  cursor: "pointer",
};

const secondaryBtn = {
  padding: "16px 28px",
  borderRadius: "999px",
  border: "1px solid #333",
  background: "transparent",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};