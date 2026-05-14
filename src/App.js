import { Navbar } from "./components/Navbar";

import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Packages } from "./components/Packages";
import { Blogs } from "./components/Blogs";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Cursor } from "./components/Cursor";

function App() {
  return (
    <>
      <Navbar />

      <Home />

      <About />

      <Services />

      <Packages />

      <Blogs />

      <Testimonials />

      <Contact />
      
      <Cursor />
    </>
  );
}

export default App;