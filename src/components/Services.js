export function Services() {
  const services = [
    {
      title: "SEO Optimization",
      desc: "On-page SEO, technical SEO, keyword strategy, and ranking improvement.",
    },
    {
      title: "Website Design",
      desc: "Modern, responsive, conversion-focused website design.",
    },
    {
      title: "Local SEO",
      desc: "Google Business Profile optimization and local ranking growth.",
    },
  ];

  return (
    <section id="services" style={{ background: "#050505", color: "white", padding: "120px 10%" }}>
      <p style={{ color: "#888", letterSpacing: "4px" }}>SERVICES</p>
      <h2 style={{ fontSize: "56px", marginBottom: "50px" }}>Services That Grow Your Brand</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "24px" }}>
        {services.map((service, index) => (
          <div
            key={index}
            style={{
              background: "linear-gradient(180deg,#151515,#070707)",
              border: "1px solid #222",
              borderRadius: "32px",
              padding: "32px",
            }}
          >
            <p style={{ color: "#888", letterSpacing: "3px", fontSize: "12px" }}>
              0{index + 1}
            </p>
            <h3 style={{ fontSize: "28px" }}>{service.title}</h3>
            <p style={{ color: "#aaa", lineHeight: "1.7" }}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}