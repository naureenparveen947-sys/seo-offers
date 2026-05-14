import { useState, useEffect } from "react";

export function Navbar() {
  const [mobile, setMobile] = useState(window.innerWidth < 900);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav style={nav}>
      <div style={logo}>SEO Offers</div>

      {mobile ? (
        <>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={menuBtn}
          >
            ☰
          </button>

          {menuOpen && (
            <div style={mobileMenu}>
              <a href="#about" style={mobileLink}>
                About
              </a>

              <a href="#services" style={mobileLink}>
                Services
              </a>

              <a href="#packages" style={mobileLink}>
                Packages
              </a>

              <a href="#blogs" style={mobileLink}>
                Blogs
              </a>

              <a href="#contact" style={mobileLink}>
                Contact
              </a>

              <button style={mobileBtn}>
                GET FREE AUDIT
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <div style={navLinks}>
            <a href="#about" style={link}>
              About
            </a>

            <a href="#services" style={link}>
              Services
            </a>

            <a href="#packages" style={link}>
              Packages
            </a>

            <a href="#blogs" style={link}>
              Blogs
            </a>

            <a href="#contact" style={link}>
              Contact
            </a>
          </div>

          <button style={ctaBtn}>
            GET FREE AUDIT
          </button>
        </>
      )}
    </nav>
  );
}

const nav = {
  position: "fixed",
  top: "18px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "92%",
  zIndex: 999,
  padding: "18px 24px",
  borderRadius: "999px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))",
  backdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.08)",
};

const logo = {
  color: "white",
  fontSize: "20px",
  fontWeight: "bold",
  letterSpacing: "2px",
  fontFamily: "Georgia, serif",
};

const navLinks = {
  display: "flex",
  gap: "38px",
  alignItems: "center",
};

const link = {
  color: "#cfcfcf",
  textDecoration: "none",
  fontSize: "17px",
};

const ctaBtn = {
  padding: "16px 30px",
  borderRadius: "999px",
  border: "none",
  background: "white",
  color: "black",
  fontWeight: "bold",
  cursor: "pointer",
};

const menuBtn = {
  background: "transparent",
  border: "none",
  color: "white",
  fontSize: "30px",
  cursor: "pointer",
};

const mobileMenu = {
  position: "absolute",
  top: "90px",
  left: 0,
  right: 0,
  margin: "0 auto",
  width: "100%",
  background:
    "linear-gradient(145deg, rgba(20,20,20,0.96), rgba(10,10,10,0.96))",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "32px",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  backdropFilter: "blur(18px)",
};

const mobileLink = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "22px",
};

const mobileBtn = {
  marginTop: "10px",
  padding: "18px",
  borderRadius: "999px",
  border: "none",
  background: "white",
  color: "black",
  fontWeight: "bold",
  cursor: "pointer",
};