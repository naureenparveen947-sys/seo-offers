import "./Navbar.css";

export function Navbar() {
  return (
    <div className="navbar">
      <h3 className="logo">SEO Offers</h3>

      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">☰</label>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#works">Works</a>
        <a href="#packages">Packages</a>
        <a href="#blogs">Blogs</a>
        <a href="#contact">Contact</a>
        <a href="#contact" className="audit-btn">GET FREE AUDIT</a>
      </div>
    </div>
  );
}