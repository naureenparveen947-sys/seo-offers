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
            <p style={reviewText}>
              “{item.review}”
            </p>

            <div style={clientInfo}>
              <h4 style={clientName}>
                {item.name}
              </h4>

              <p style={clientRole}>
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const testimonialsSection = {
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

const testimonialsGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gap: "28px",
};

const glassCard = {
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "36px",
  padding: "40px",
  backdropFilter: "blur(14px)",
};

const reviewText = {
  color: "#bdbdbd",
  lineHeight: "1.9",
  fontSize: "18px",
  marginBottom: "42px",
};

const clientInfo = {
  borderTop: "1px solid rgba(255,255,255,0.08)",
  paddingTop: "22px",
};

const clientName = {
  fontFamily: "Georgia, serif",
  fontSize: "28px",
  marginBottom: "8px",
  fontWeight: 400,
};

const clientRole = {
  color: "#777",
  fontSize: "15px",
  letterSpacing: "2px",
};