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
    <section
      id="testimonials"
      style={{
        background: "#050505",
        color: "white",
        padding: "120px 10%",
      }}
    >
      <p style={{ color: "#888", letterSpacing: "4px" }}>
        TESTIMONIALS
      </p>

      <h2 style={{ fontSize: "56px", marginBottom: "50px" }}>
        What Clients Say
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "24px",
        }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              border: "1px solid #222",
              borderRadius: "32px",
              padding: "32px",
            }}
          >
            <p
              style={{
                color: "#aaa",
                lineHeight: "1.8",
                marginBottom: "30px",
              }}
            >
              "{item.review}"
            </p>

            <div>
              <h4 style={{ marginBottom: "6px" }}>
                {item.name}
              </h4>

              <p style={{ color: "#777" }}>
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}