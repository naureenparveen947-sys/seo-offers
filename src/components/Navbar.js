import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AUDIT_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSfac6upo7gLV8n9KvUDs1n6BsKoLyuJASkW560OLJ1f4ZlWJQ/viewform";

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

  const goHome = () => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav style={nav}>
      <Link to="/" style={logo} onClick={goHome}>
        SEO Offers
      </Link>

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
              <a href="#about" style={mobileLink} onClick={() => setMenuOpen(false)}>
                About
              </a>

              <a href="#services" style={mobileLink} onClick={() => setMenuOpen(false)}>
                Services
              </a>

              <a href="#packages" style={mobileLink} onClick={() => setMenuOpen(false)}>
                Packages
              </a>

              <a href="#blogs" style={mobileLink} onClick={() => setMenuOpen(false)}>
                Blogs
              </a>

              <a href="#contact" style={mobileLink} onClick={() => setMenuOpen(false)}>
                Contact
              </a>

              <a
                href={AUDIT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={mobileBtn}
                onClick={() => setMenuOpen(false)}
              >
                GET FREE AUDIT
              </a>
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

          <a
            href={AUDIT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={ctaBtn}
          >
            GET FREE AUDIT
          </a>
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
  textDecoration: "none",
  cursor: "pointer",
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
  textDecoration: "none",
  display: "inline-block",
  textAlign: "center",
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
  textDecoration: "none",
  display: "block",
  textAlign: "center",
};