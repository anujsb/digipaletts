import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import DigitalMarketing from "./components/Services/DigitalMarketing";
import SocialMarketing from "./components/Services/SocialMarketing";
import PaidAdvertising from "./components/Services/PaidAdvertising";
// import SEO from "./components/Services/SEO";
import Overlaymenu from "./components/Extra/FullscreenOverlayNav";
import About from "./components/Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="justify-center items-center">
              <Navbar />
              <Hero />
              <Info />
              <Services />
              <Blog />
              <Testimonial />
              <Faq />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
        <Route
          path="/About"
          element={
            <div>
              <About />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
        <Route
          path="/DigitalMarketing"
          element={
            <div>
              <Navbar />
              <DigitalMarketing />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
        <Route
          path="/SocialMarketing"
          element={
            <div>
              <Navbar />
              <SocialMarketing />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
