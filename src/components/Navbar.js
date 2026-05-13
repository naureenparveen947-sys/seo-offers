export function Navbar() {
  return (
    <div
      style={{
        position: "fixed",
        top: "16px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "90%",
        maxWidth: "1100px",
        padding: "14px 22px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        zIndex: 999,
        background: "rgba(10,10,10,0.65)",
        backdropFilter: "blur(16px)",
        border: "1px solid #222",
        borderRadius: "999px",
      }}
    >
      <h3 style={{ margin: 0, letterSpacing: "2px" }}>SEO Offers</h3>

      <div style={{ display: "flex", gap: "24px", fontSize: "14px" }}>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#works" style={linkStyle}>Works</a>
        <a href="#packages" style={linkStyle}>Packages</a>
        <a href="#blogs" style={linkStyle}>Blogs</a>
        <a href="#contact" style={linkStyle}>Contact</a>
      </div>

      <a href="#contact" style={buttonStyle}>
        GET FREE AUDIT
      </a>
    </div>
  );
}

const linkStyle = {
  color: "#aaa",
  textDecoration: "none",
};

const buttonStyle = {
  background: "white",
  color: "black",
  padding: "10px 16px",
  borderRadius: "999px",
  fontWeight: "bold",
  textDecoration: "none",
  fontSize: "13px",
};