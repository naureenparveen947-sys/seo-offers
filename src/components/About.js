export function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "white",
        padding: "120px 10%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "60px",
          width: "100%",
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              color: "#888",
              letterSpacing: "4px",
              marginBottom: "20px",
            }}
          >
            ABOUT
          </p>

          <h2
            style={{
              fontSize: "56px",
              lineHeight: "1.1",
              marginBottom: "24px",
            }}
          >
            Creating Digital
            <br />
            Experiences That Convert.
          </h2>

          <p
            style={{
              color: "#aaa",
              lineHeight: "1.9",
              fontSize: "18px",
            }}
          >
            We help brands grow through modern website design,
            SEO optimization, and powerful digital strategies.
            Our goal is to build experiences that attract,
            engage, and convert users into customers.
          </p>
        </div>

        <div
          style={{
            background: "linear-gradient(180deg,#151515,#070707)",
            border: "1px solid #222",
            borderRadius: "32px",
            padding: "50px",
          }}
        >
          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ marginBottom: "10px" }}>SEO Optimization</h3>
            <p style={{ color: "#888" }}>
              Improve rankings and visibility.
            </p>
          </div>

          <div style={{ marginBottom: "30px" }}>
            <h3 style={{ marginBottom: "10px" }}>Modern UI Design</h3>
            <p style={{ color: "#888" }}>
              Premium futuristic website experiences.
            </p>
          </div>

          <div>
            <h3 style={{ marginBottom: "10px" }}>Growth Strategy</h3>
            <p style={{ color: "#888" }}>
              Data-driven marketing and branding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}