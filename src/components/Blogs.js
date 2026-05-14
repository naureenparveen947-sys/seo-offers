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
            <p style={category}>
              {blog.category}
            </p>

            <h3 style={blogTitle}>
              {blog.title}
            </h3>

            <p style={blogText}>
              {blog.desc}
            </p>

            <button style={readBtn}>
              READ MORE →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

const blogsSection = {
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

const blogsGrid = {
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

const category = {
  color: "#777",
  letterSpacing: "4px",
  fontSize: "12px",
  marginBottom: "20px",
};

const blogTitle = {
  fontFamily: "Georgia, serif",
  fontSize: "34px",
  lineHeight: "1.2",
  marginBottom: "20px",
  fontWeight: 400,
};

const blogText = {
  color: "#aaa",
  lineHeight: "1.9",
  fontSize: "17px",
  marginBottom: "34px",
};

const readBtn = {
  padding: "16px 28px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.12)",
  background:
    "linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.05))",
  color: "white",
  fontWeight: "bold",
  letterSpacing: "2px",
  cursor: "pointer",
  backdropFilter: "blur(12px)",
};