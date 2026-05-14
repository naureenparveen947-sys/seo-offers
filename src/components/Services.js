export function Services() {
  const services = [
    {
      title: "SEO Optimization",
      desc: "Technical SEO, keyword systems, and ranking strategies built for long-term visibility.",
    },
    {
      title: "Website Design",
      desc: "Modern cinematic websites with responsive layouts and premium user experiences.",
    },
    {
      title: "Local SEO",
      desc: "Google Business optimization and local growth strategies for targeted reach.",
    },
  ];

  return (
    <section id="services" style={servicesSection}>
      <p style={tag}>SERVICES</p>

      <h2 style={heading}>
        Services designed
        <br />
        for modern brands.
      </h2>

      <div style={servicesGrid}>
        {services.map((service, index) => (
          <div key={index} style={glassCard}>
            <p style={number}>0{index + 1}</p>

            <h3 style={serviceTitle}>{service.title}</h3>

            <p style={serviceText}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const servicesSection = {
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

const heading = {
  fontFamily: "Georgia, serif",
  fontSize: "clamp(56px,8vw,110px)",
  lineHeight: "0.95",
  fontWeight: 400,
  marginBottom: "70px",
};

const servicesGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: "24px",
};

const glassCard = {
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "34px",
  padding: "40px",
  backdropFilter: "blur(14px)",
  transition: "0.3s ease",
};

const number = {
  color: "#777",
  letterSpacing: "4px",
  fontSize: "12px",
  marginBottom: "22px",
};

const serviceTitle = {
  fontFamily: "Georgia, serif",
  fontSize: "34px",
  marginBottom: "18px",
  fontWeight: 400,
};

const serviceText = {
  color: "#a8a8a8",
  lineHeight: "1.9",
  fontSize: "17px",
};