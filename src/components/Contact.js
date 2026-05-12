export function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#050505",
        color: "white",
        padding: "120px 10%",
      }}
    >
      <p style={{ color: "#888", letterSpacing: "4px" }}>
        CONTACT
      </p>

      <h2
        style={{
          fontSize: "64px",
          lineHeight: "1.1",
          marginBottom: "20px",
        }}
      >
        Let’s Build
        <br />
        Something Great.
      </h2>

      <p
        style={{
          color: "#aaa",
          maxWidth: "650px",
          lineHeight: "1.8",
          marginBottom: "50px",
        }}
      >
        Want to improve your website, SEO rankings, or digital presence?
        Let’s discuss your project and create something impactful.
      </p>

      <form
        style={{
          display: "grid",
          gap: "20px",
          maxWidth: "700px",
        }}
      >
        <input
          placeholder="Your Name"
          style={inputStyle}
        />

        <input
          placeholder="Your Email"
          style={inputStyle}
        />

        <textarea
          rows="6"
          placeholder="Tell me about your project..."
          style={inputStyle}
        />

        <button
          style={{
            padding: "18px",
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
      </form>
    </section>
  );
}

const inputStyle = {
  padding: "18px",
  borderRadius: "18px",
  border: "1px solid #222",
  background: "#111",
  color: "white",
  outline: "none",
};