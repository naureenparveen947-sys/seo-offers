export function Packages() {
  const packages = [
    {
      name: "Starter",
      price: "$95",
      features: [
        "SEO Audit",
        "25 Keywords",
        "On-page SEO",
        "Technical SEO",
        "Backlinks",
      ],
    },
    {
      name: "Growth",
      price: "$199",
      features: [
        "Full SEO Audit",
        "Technical SEO",
        "Local SEO",
        "GMB Optimization",
        "Backlinks Strategy",
      ],
    },
    {
      name: "Premium",
      price: "$295",
      features: [
        "Advanced SEO",
        "Website Creation",
        "45 Keywords",
        "Weekly Reporting",
        "Priority Support",
      ],
    },
  ];

  return (
    <section
      id="packages"
      style={{
        background: "#000",
        color: "white",
        padding: "120px 10%",
      }}
    >
      <p style={{ color: "#888", letterSpacing: "4px" }}>
        PACKAGES
      </p>

      <h2 style={{ fontSize: "56px", marginBottom: "50px" }}>
        Choose Your Growth Plan
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "24px",
        }}
      >
        {packages.map((item, index) => (
          <div
            key={index}
            style={{
              background: "linear-gradient(180deg,#151515,#070707)",
              border: "1px solid #222",
              borderRadius: "32px",
              padding: "40px",
            }}
          >
            <p
              style={{
                color: "#888",
                letterSpacing: "3px",
                fontSize: "12px",
              }}
            >
              PACKAGE 0{index + 1}
            </p>

            <h3 style={{ fontSize: "32px" }}>
              {item.name}
            </h3>

            <h1 style={{ fontSize: "60px", margin: "20px 0" }}>
              {item.price}
            </h1>

            {item.features.map((feature, i) => (
              <p key={i} style={{ color: "#aaa" }}>
                ✓ {feature}
              </p>
            ))}

            <button
              style={{
                marginTop: "30px",
                width: "100%",
                padding: "16px",
                borderRadius: "999px",
                border: "none",
                background: "white",
                color: "black",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              GET FREE AUDIT
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}