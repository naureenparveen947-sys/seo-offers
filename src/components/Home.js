import { useEffect, useState } from "react";
import Sphere from "./Sphere";

export function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <section id="home" style={isMobile ? mobileHomeSection : homeSection}>
        <Sphere />

        <div style={overlay}></div>

        <div style={isMobile ? mobileLeftText : leftText}>
          <h1 style={isMobile ? mobileHeading : leftHeading}>
            SEARCH ENGINE
            <br />
            <em>OPTIMIZATION</em>
          </h1>
        </div>

        <button style={isMobile ? mobileCenterBtn : centerBtn}>
          GET FREE AUDIT
        </button>

        <div style={isMobile ? mobileRightText : rightText}>
          <h1 style={isMobile ? mobileHeading : rightHeading}>
            TRAFFIC
            <br />
            <em>GROWTH</em>
          </h1>
        </div>
      </section>

      <section style={bridgeSection}>
        <div style={bridgeLine}></div>

        <p style={isMobile ? mobileBridgeText : bridgeText}>
          STRATEGY • DESIGN • SEO • GROWTH
        </p>

        <div style={isMobile ? mobileBridgeCards : bridgeCards}>
          <div style={isMobile ? mobileMiniCard : miniCard}>01 / Brand Systems</div>
          <div style={isMobile ? mobileMiniCard : miniCard}>02 / SEO Architecture</div>
          <div style={isMobile ? mobileMiniCard : miniCard}>03 / Web Experiences</div>
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
    "linear-gradient(to bottom, rgba(0,0,0,0.05), rgba(0,0,0,0.45))",
  zIndex: 1,
};

const leftText = {
  position: "absolute",
  top: "50%",
  left: "4%",
  transform: "translateY(-50%)",
  zIndex: 3,
};

const rightText = {
  position: "absolute",
  right: "4%",
  bottom: "10%",
  zIndex: 3,
  textAlign: "right",
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
  top: "74%",
  left: "30%",
  transform: "translate(-50%, -50%)",
  zIndex: 4,
  padding: "20px 54px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.14)",
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.22), rgba(255,255,255,0.04))",
  backdropFilter: "blur(14px)",
  boxShadow: "0 0 40px rgba(255,255,255,0.12)",
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

/* MOBILE ONLY */
const mobileHomeSection = {
  ...homeSection,
  minHeight: "82vh",
  padding: "125px 14px 38px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxSizing: "border-box",
};

const mobileLeftText = {
  position: "relative",
  zIndex: 3,
  alignSelf: "flex-start",
};

const mobileRightText = {
  position: "relative",
  zIndex: 3,
  alignSelf: "flex-end",
  textAlign: "right",
};

const mobileHeading = {
  fontFamily: "Georgia, serif",
  fontSize: "clamp(30px, 10vw, 44px)",
  lineHeight: "0.95",
  fontWeight: 400,
  margin: 0,
};

const mobileCenterBtn = {
  ...centerBtn,
  position: "relative",
  top: "auto",
  left: "auto",
  transform: "none",
  alignSelf: "center",
  padding: "12px 28px",
  fontSize: "10px",
  letterSpacing: "1.2px",
  margin: "25px 0",
};

const mobileBridgeText = {
  ...bridgeText,
  letterSpacing: "4px",
  fontSize: "10px",
};

const mobileBridgeCards = {
  ...bridgeCards,
  gridTemplateColumns: "1fr",
};

const mobileMiniCard = {
  ...miniCard,
  fontSize: "16px",
  padding: "20px",
};