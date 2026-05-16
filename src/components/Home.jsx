import Sphere from "./Sphere";
import "./Home.css";

export function Home() {
  return (
    <>
      <section id="home" className="home-section">
        <Sphere />

        <div className="overlay"></div>

        <div className="left-text">
          <h1>
            SEARCH ENGINE
            <br />
            <em>OPTIMIZATION</em>
          </h1>
        </div>

        <div className="right-text">
          <h1>
            TRAFFIC
            <br />
            <em>GROWTH</em>
          </h1>
        </div>

        <button className="center-btn">GET FREE AUDIT</button>
      </section>

      <section className="bridge-section">
        <div className="bridge-line"></div>

        <p className="bridge-text">
          STRATEGY • DESIGN • SEO • GROWTH
        </p>

        <div className="bridge-cards">
          <div className="mini-card">01 / Brand Systems</div>
          <div className="mini-card">02 / SEO Architecture</div>
          <div className="mini-card">03 / Web Experiences</div>
        </div>
      </section>
    </>
  );
}