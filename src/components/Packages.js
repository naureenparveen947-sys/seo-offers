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
          <div key={index} style={index === 1 ? featuredCard : glassCard}>
            <p style={packageNumber}>PACKAGE 0{index + 1}</p>
            <h3 style={packageName}>{item.name}</h3>
            <h1 style={packagePrice}>{item.price}</h1>
            <div style={featuresWrap}>
              {item.features.map((feature, i) => (
                <p key={i} style={featureText}>✓ {feature}</p>
              ))}
            </div>
            <button style={ctaBtn}>GET FREE AUDIT</button>
          </div>
        ))}
      </div>
    </section>
  );
}

const packagesSection = {
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
  // ✅ 56px minimum → 28px
  fontSize: "clamp(28px, 5vw, 72px)",
  lineHeight: "1.05",
  fontWeight: 400,
  // ✅ 70px → responsive
  marginBottom: "clamp(30px, 5vw, 60px)",
};

const packagesGrid = {
  display: "grid",
  // ✅ mobile pe single column
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "clamp(16px, 2vw, 28px)",
  alignItems: "start",
};

const glassCard = {
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "clamp(22px, 3vw, 38px)",
  // ✅ 44px → mobile pe 22px
  padding: "clamp(22px, 4vw, 44px)",
  backdropFilter: "blur(14px)",
};

const featuredCard = {
  ...glassCard,
  // ✅ mobile pe scale hata diya — overflow hota tha
  transform: "scale(1.02)",
  border: "1px solid rgba(255,255,255,0.2)",
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03))",
};

const packageNumber = {
  color: "#777",
  letterSpacing: "4px",
  fontSize: "clamp(10px, 1.2vw, 12px)",
  marginBottom: "clamp(12px, 2vw, 20px)",
};

const packageName = {
  fontFamily: "Georgia, serif",
  // ✅ 36px → responsive
  fontSize: "clamp(22px, 3vw, 34px)",
  marginBottom: "10px",
  fontWeight: 400,
};

const packagePrice = {
  fontFamily: "Georgia, serif",
  // ✅ 76px → mobile pe 40px
  fontSize: "clamp(40px, 6vw, 76px)",
  margin: "clamp(10px, 2vw, 18px) 0 clamp(20px, 3vw, 34px)",
  fontWeight: 400,
};

const featuresWrap = {
  marginBottom: "clamp(20px, 3vw, 36px)",
};

const featureText = {
  color: "#b0b0b0",
  marginBottom: "clamp(8px, 1.2vw, 14px)",
  // ✅ responsive font
  fontSize: "clamp(13px, 1.5vw, 16px)",
};

const ctaBtn = {
  width: "100%",
  // ✅ padding responsive
  padding: "clamp(12px, 2vw, 18px)",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.1)",
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.05))",
  color: "white",
  fontWeight: "bold",
  letterSpacing: "2px",
  cursor: "pointer",
  backdropFilter: "blur(12px)",
  fontSize: "clamp(11px, 1.3vw, 13px)",
};