export function Blogs() {
  const blogs = [
    {
      category: "SEO",
      title: "How SEO Helps Businesses Grow Online",
      desc: "Learn how SEO improves visibility, traffic, and leads.",
    },
    {
      category: "WEB DESIGN",
      title: "Why Every Business Needs A Modern Website",
      desc: "A strong website builds trust and converts visitors into clients.",
    },
    {
      category: "MARKETING",
      title: "Digital Marketing Trends For 2026",
      desc: "Explore strategies that help brands grow faster online.",
    },
  ];

  return (
    <section id="blogs" style={{ background: "#000", color: "white", padding: "120px 10%" }}>
      <p style={{ color: "#888", letterSpacing: "4px" }}>BLOGS</p>

      <h2 style={{ fontSize: "56px", marginBottom: "50px" }}>
        Latest Insights
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "24px" }}>
        {blogs.map((blog, index) => (
          <article
            key={index}
            style={{
              background: "linear-gradient(180deg,#151515,#070707)",
              border: "1px solid #222",
              borderRadius: "32px",
              padding: "32px",
            }}
          >
            <p style={{ color: "#888", letterSpacing: "3px", fontSize: "12px" }}>
              {blog.category}
            </p>

            <h3 style={{ fontSize: "28px", lineHeight: "1.3" }}>
              {blog.title}
            </h3>

            <p style={{ color: "#aaa", lineHeight: "1.7" }}>
              {blog.desc}
            </p>

            <button
              style={{
                marginTop: "24px",
                padding: "14px 22px",
                borderRadius: "999px",
                border: "1px solid #333",
                background: "white",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Read More →
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}