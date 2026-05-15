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
  // ✅ minHeight "100vh" hata diya
  background: "#050505",
  color: "white",
  // ✅ 140px → mobile pe 60px
  padding: "clamp(60px, 8vw, 100px) clamp(20px, 6%, 80px)",
  borderTop: "1px solid rgba(255,255,255,0.08)",
};

const tag = {
  color: "#888",
  letterSpacing: "10px",
  fontSize: "clamp(11px, 1.5vw, 13px)",
  marginBottom: "clamp(20px, 3vw, 34px)",
};

const heading = {
  fontFamily: "Georgia, serif",
  // ✅ 56px minimum → 28px kiya
  fontSize: "clamp(28px, 5vw, 72px)",
  lineHeight: "1.05",
  fontWeight: 400,
  // ✅ 70px margin → responsive
  marginBottom: "clamp(30px, 5vw, 70px)",
};

const servicesGrid = {
  display: "grid",
  // ✅ mobile pe 1 column automatically
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "clamp(16px, 2vw, 24px)",
};

const glassCard = {
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "clamp(20px, 3vw, 34px)",
  // ✅ 40px padding → mobile pe 20px
  padding: "clamp(20px, 3.5vw, 40px)",
  backdropFilter: "blur(14px)",
  transition: "0.3s ease",
};

const number = {
  color: "#777",
  letterSpacing: "4px",
  fontSize: "clamp(11px, 1.2vw, 12px)",
  marginBottom: "clamp(14px, 2vw, 22px)",
};

const serviceTitle = {
  fontFamily: "Georgia, serif",
  // ✅ 34px → responsive
  fontSize: "clamp(20px, 2.8vw, 32px)",
  marginBottom: "clamp(10px, 1.5vw, 18px)",
  fontWeight: 400,
};

const serviceText = {
  color: "#a8a8a8",
  lineHeight: "1.9",
  // ✅ responsive font
  fontSize: "clamp(13px, 1.6vw, 17px)",
};