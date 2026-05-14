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
    <section id="packages" style={packagesSection}>
      <p style={tag}>PACKAGES</p>

      <h2 style={heading}>
        Choose your
        <br />
        growth plan.
      </h2>

      <div style={packagesGrid}>
        {packages.map((item, index) => (
          <div
            key={index}
            style={index === 1 ? featuredCard : glassCard}
          >
            <p style={packageNumber}>
              PACKAGE 0{index + 1}
            </p>

            <h3 style={packageName}>{item.name}</h3>

            <h1 style={packagePrice}>{item.price}</h1>

            <div style={featuresWrap}>
              {item.features.map((feature, i) => (
                <p key={i} style={featureText}>
                  ✓ {feature}
                </p>
              ))}
            </div>

            <button style={ctaBtn}>
              GET FREE AUDIT
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

const packagesSection = {
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

const packagesGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
  gap: "28px",
};

const glassCard = {
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "38px",
  padding: "44px",
  backdropFilter: "blur(14px)",
};

const featuredCard = {
  ...glassCard,
  transform: "scale(1.03)",
  border: "1px solid rgba(255,255,255,0.2)",
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03))",
};

const packageNumber = {
  color: "#777",
  letterSpacing: "4px",
  fontSize: "12px",
  marginBottom: "20px",
};

const packageName = {
  fontFamily: "Georgia, serif",
  fontSize: "36px",
  marginBottom: "10px",
  fontWeight: 400,
};

const packagePrice = {
  fontFamily: "Georgia, serif",
  fontSize: "76px",
  margin: "18px 0 34px",
  fontWeight: 400,
};

const featuresWrap = {
  marginBottom: "36px",
};

const featureText = {
  color: "#b0b0b0",
  marginBottom: "14px",
  fontSize: "16px",
};

const ctaBtn = {
  width: "100%",
  padding: "18px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.1)",
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.05))",
  color: "white",
  fontWeight: "bold",
  letterSpacing: "2px",
  cursor: "pointer",
  backdropFilter: "blur(12px)",
};