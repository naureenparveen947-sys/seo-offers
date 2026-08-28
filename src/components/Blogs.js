import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client } from "../sanity";

export function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `
      *[
        _type == "post" &&
        !(_id in path("drafts.**"))
      ]
      | order(_createdAt desc) {
        _id,
        title,
        "slug": slug.current,
        "category": categories[0]->title,
        _createdAt
      }
    `;

    client
      .fetch(query)
      .then((data) => {
        console.log("Blogs:", data);
        setBlogs(data || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Blogs error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section id="blogs" style={section}>
      <div style={container}>

        {/* Section heading */}
        <div style={headingWrapper}>
          <p style={eyebrow}>BLOG</p>

          <h2 style={heading}>
            Thoughts &amp; Stories
          </h2>
        </div>

        {/* Loading */}
        {loading && (
          <p style={message}>
            Loading blogs...
          </p>
        )}

        {/* No blogs */}
        {!loading && blogs.length === 0 && (
          <p style={message}>
            No blogs found.
          </p>
        )}

        {/* Blog cards */}
        {!loading && blogs.length > 0 && (
          <div style={grid}>
            {blogs.map((blog) => (
              <Link
                key={blog._id}
                to={`/blogs/${blog.slug}`}
                style={card}
              >
                <div style={cardContent}>

                  <p style={category}>
                    {blog.category || "BLOG"}
                  </p>

                  <h3 style={blogTitle}>
                    {blog.title}
                  </h3>

                  <span style={readMore}>
                    Read Article →
                  </span>

                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}


/* =========================
   STYLES
========================= */

const section = {
  minHeight: "80vh",
  background: "#050505",
  color: "white",
  padding: "120px 20px",
};

const container = {
  maxWidth: "1200px",
  margin: "0 auto",
};

const headingWrapper = {
  marginBottom: "70px",
};

const eyebrow = {
  color: "#777",
  letterSpacing: "5px",
  fontSize: "12px",
  marginBottom: "20px",
  textTransform: "uppercase",
};

const heading = {
  fontFamily: "Georgia, serif",
  fontSize: "clamp(45px, 7vw, 90px)",
  fontWeight: 400,
  lineHeight: 1.05,
  margin: 0,
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "25px",
};

const card = {
  display: "block",
  minHeight: "300px",
  padding: "35px",
  background: "#0d0d0d",
  border: "1px solid #222",
  color: "white",
  textDecoration: "none",
  transition: "all 0.3s ease",
};

const cardContent = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const category = {
  color: "#777",
  letterSpacing: "4px",
  fontSize: "11px",
  margin: 0,
  textTransform: "uppercase",
};

const blogTitle = {
  fontFamily: "Georgia, serif",
  fontSize: "clamp(28px, 4vw, 45px)",
  fontWeight: 400,
  lineHeight: 1.15,
  margin: "40px 0",
  overflowWrap: "anywhere",
};

const readMore = {
  color: "#aaa",
  fontSize: "14px",
  letterSpacing: "1px",
};

const message = {
  color: "#888",
  fontSize: "16px",
};
