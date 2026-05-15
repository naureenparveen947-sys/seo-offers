export function Testimonials() {
  const testimonials = [
    {
      name: "Michael",
      role: "Business Owner",
      review:
        "Amazing SEO service! My traffic and leads increased significantly.",
    },
    {
      name: "Sarah",
      role: "Startup Founder",
      review:
        "Professional website design with modern UI and excellent support.",
    },
    {
      name: "David",
      role: "Local Business",
      review:
        "Highly recommended for SEO and branding strategies.",
    },
  ];

  return (
    <section id="testimonials" style={testimonialsSection}>
      <p style={tag}>TESTIMONIALS</p>

      <h2 style={heading}>
        What clients
        <br />
        say about us.
      </h2>

      <div style={testimonialsGrid}>
        {testimonials.map((item, index) => (
          <div key={index} style={glassCard}>
            <p style={reviewText}>"{item.review}"</p>
            <div style={clientInfo}>
              <h4 style={clientName}>{item.name}</h4>
              <p style={clientRole}>{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const testimonialsSection = {
  // ✅ minHeight "100vh" hata diya
  background: "#050505",
  color: "white",
  // ✅ 140px → clamp
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
  // ✅ 56px → 28px minimum
  fontSize: "clamp(28px, 5vw, 72px)",
  lineHeight: "1.05",
  fontWeight: 400,
  // ✅ 70px → responsive
  marginBottom: "clamp(30px, 5vw, 60px)",
};

const testimonialsGrid = {
  display: "grid",
  // ✅ mobile pe single column
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "clamp(16px, 2vw, 28px)",
};

const glassCard = {
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "clamp(20px, 3vw, 36px)",
  // ✅ 40px → mobile pe 22px
  padding: "clamp(22px, 3.5vw, 40px)",
  backdropFilter: "blur(14px)",
};

const reviewText = {
  color: "#bdbdbd",
  lineHeight: "1.9",
  // ✅ 18px → responsive
  fontSize: "clamp(14px, 1.6vw, 18px)",
  // ✅ 42px → responsive
  marginBottom: "clamp(24px, 3.5vw, 42px)",
};

const clientInfo = {
  borderTop: "1px solid rgba(255,255,255,0.08)",
  paddingTop: "clamp(14px, 2vw, 22px)",
};

const clientName = {
  fontFamily: "Georgia, serif",
  // ✅ 28px → responsive
  fontSize: "clamp(18px, 2.5vw, 26px)",
  marginBottom: "8px",
  fontWeight: 400,
};

const clientRole = {
  color: "#777",
  // ✅ 15px → responsive
  fontSize: "clamp(12px, 1.4vw, 15px)",
  letterSpacing: "2px",
};