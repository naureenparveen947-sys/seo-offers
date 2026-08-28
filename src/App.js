import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Packages } from "./components/Packages";
import { Blogs } from "./components/Blogs";
import { BlogDetail } from "./components/BlogDetail";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Cursor } from "./components/Cursor";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =========================
            HOME PAGE
        ========================= */}

        <Route
          path="/"
          element={
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
          }
        />


        {/* =========================
            BLOG DETAIL PAGE
        ========================= */}

        <Route
          path="/blogs/:slug"
          element={
            <>
              <Navbar />

              <BlogDetail />

              <Cursor />
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;
