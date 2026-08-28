import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { client } from "../sanity";

export function BlogDetail() {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    const query = `
      *[
        _type == "post" &&
        slug.current == $slug &&
        !(_id in path("drafts.**"))
      ][0] {
        _id,
        title,
        "slug": slug.current,
        "category": categories[0]->title,
        body,
        _createdAt
      }
    `;

    client
      .fetch(query, { slug })
      .then((data) => {
        console.log("Single blog:", data);
        setBlog(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Blog detail error:", error);
        setLoading(false);
      });
  }, [slug]);

  /* =========================
     LOADING
  ========================= */

  if (loading) {
    return (
      <main style={page}>
        <div style={container}>
          <p style={loadingText}>
            Loading...
          </p>
        </div>
      </main>
    );
  }

  /* =========================
     BLOG NOT FOUND
  ========================= */

  if (!blog) {
    return (
      <main style={page}>
        <div style={container}>

          <h1 style={notFoundTitle}>
            Blog not found
          </h1>

          <Link
            to="/#blogs"
            style={backButton}
          >
            ← Back to Blogs
          </Link>

        </div>
      </main>
    );
  }

  /* =========================
     BLOG DETAIL PAGE
  ========================= */

  return (
    <main style={page}>
      <div style={container}>

        {/* Back button */}
        <Link
          to="/#blogs"
          style={backButton}
        >
          ← Back to Blogs
        </Link>

        {/* Category */}
        <p style={category}>
          {blog.category || "BLOG"}
        </p>

        {/* Title */}
        <h1 style={title}>
          {blog.title}
        </h1>

        {/* Blog content */}
        <div style={content}>
          {blog.body ? (
            <PortableText value={blog.body} />
          ) : (
            <p>
              No content available.
            </p>
          )}
        </div>

      </div>
    </main>
  );
}


/* =========================
   STYLES
========================= */

const page = {
  minHeight: "100vh",
  background: "#050505",
  color: "white",
  padding: "150px 20px 80px",
};

const container = {
  maxWidth: "900px",
  margin: "0 auto",
};

const loadingText = {
  color: "#aaa",
  fontSize: "18px",
};

const backButton = {
  display: "inline-block",
  marginBottom: "60px",
  color: "#aaa",
  textDecoration: "none",
  fontSize: "15px",
  textDecorationLine: "none",
};

const category = {
  color: "#777",
  letterSpacing: "5px",
  fontSize: "12px",
  marginBottom: "25px",
  textTransform: "uppercase",
};

const title = {
  fontFamily: "Georgia, serif",
  fontSize: "clamp(42px, 7vw, 90px)",
  fontWeight: 400,
  lineHeight: 1.05,
  marginBottom: "60px",
  overflowWrap: "anywhere",
};

const content = {
  color: "#bbb",
  fontSize: "18px",
  lineHeight: 1.9,
  overflowWrap: "anywhere",
  wordBreak: "break-word",
};

const notFoundTitle = {
  fontFamily: "Georgia, serif",
  fontSize: "50px",
  fontWeight: 400,
  marginBottom: "30px",
};
