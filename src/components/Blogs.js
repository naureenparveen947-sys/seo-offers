export function Blogs() {
  const blogs = [
    {
      category: "SEO",
      title: "How SEO Helps Businesses Grow Online",
      desc: "Learn how SEO improves visibility, traffic, and long-term brand growth.",
    },
    {
      category: "WEB DESIGN",
      title: "Why Every Business Needs A Modern Website",
      desc: "A premium website builds trust and converts visitors into loyal clients.",
    },
    {
      category: "MARKETING",
      title: "Digital Marketing Trends For 2026",
      desc: "Explore modern strategies helping brands scale faster online.",
    },
  ];

  return (
    <section id="blogs" style={blogsSection}>
      <p style={tag}>BLOGS</p>

      <h2 style={heading}>
        Latest insights
        <br />
        from our studio.
      </h2>

      <div style={blogsGrid}>
        {blogs.map((blog, index) => (
          <article key={index} style={glassCard}>
            <p style={category}>{blog.category}</p>
            <h3 style={blogTitle}>{blog.title}</h3>
            <p style={blogText}>{blog.desc}</p>
            <button style={readBtn}>READ MORE →</button>
          </article>
        ))}
      </div>
    </section>
  );
}

const blogsSection = {
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

const blogsGrid = {
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
  // ✅ card ko flex banaya taaki button neeche rahe
  display: "flex",
  flexDirection: "column",
};

const category = {
  color: "#777",
  letterSpacing: "4px",
  fontSize: "clamp(10px, 1.2vw, 12px)",
  marginBottom: "clamp(12px, 2vw, 20px)",
};

const blogTitle = {
  fontFamily: "Georgia, serif",
  // ✅ 34px → responsive
  fontSize: "clamp(20px, 2.8vw, 32px)",
  lineHeight: "1.2",
  marginBottom: "clamp(12px, 1.5vw, 20px)",
  fontWeight: 400,
};

const blogText = {
  color: "#aaa",
  lineHeight: "1.9",
  // ✅ 17px → responsive
  fontSize: "clamp(13px, 1.5vw, 17px)",
  marginBottom: "clamp(20px, 3vw, 34px)",
  // ✅ button neeche push karne ke liye
  flex: 1,
};

const readBtn = {
  // ✅ padding responsive
  padding: "clamp(12px, 1.5vw, 16px) clamp(18px, 2.5vw, 28px)",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.12)",
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.05))",
  color: "white",
  fontWeight: "bold",
  letterSpacing: "2px",
  cursor: "pointer",
  backdropFilter: "blur(12px)",
  fontSize: "clamp(11px, 1.3vw, 13px)",
  // ✅ button sirf content jitna wide
  alignSelf: "flex-start",
};