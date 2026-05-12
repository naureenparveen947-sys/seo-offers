import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Blogs } from "./components/Blogs";
import { Packages } from "./components/Packages";
import { Testimonials } from "./components/Testimonials";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Packages />
      <Testimonials />
      <Blogs />
      <Contact />
    </>
  );
}

export default App;