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
import SEO from "./components/Services/SEO";
import Website from "./components/Services/Website";
import Branding from "./components/Services/Branding";
import GraphicDesigning from "./components/Services/GraphicDesigning";
import VideoProduction from "./components/Services/VideoProduction";
import Overlaymenu from "./components/ham/FullscreenOverlayNav";
import About from "./components/Pages/About";
import Land from "./components/Land";
import Payment from "./components/Pages/Payment";
import Tnc from "./components/Tnc";
import Privacy from "./components/Privacy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Home"
          element={
            <div className="justify-center items-center w-full">
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
            <div className="justify-center items-center">
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
            <div className="justify-center items-center">
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
            <div className="justify-center items-center">
              <Navbar />
              <SocialMarketing />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
        <Route
          path="/PaidAdvertising"
          element={
            <div className="justify-center items-center">
              <Navbar />
              <PaidAdvertising />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
        <Route
          path="/SEO"
          element={
            <div className="justify-center items-center">
              <Navbar />
              <SEO />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
        <Route
          path="/Website"
          element={
            <div className="justify-center items-center">
              <Navbar />
              <Website />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
        <Route
          path="/Branding"
          element={
            <div className="justify-center items-center">
              <Navbar />
              <Branding />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
        <Route
          path="/GraphicDesigning"
          element={
            <div className="justify-center items-center">
              <Navbar />
              <GraphicDesigning />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
        <Route
          path="/VideoProduction"
          element={
            <div className="justify-center items-center">
              <Navbar />
              <VideoProduction />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
        {/* <Route
          path="/Hero"
          element={
            <div className="justify-center items-center">
              <Hero />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        /> */}
        <Route
          path="/About"
          element={
            <div className="justify-center items-center">
              <About />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
        <Route
          path="/Services"
          element={
            <div className="justify-center items-center">
              <Services />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
        <Route
          path="/Blog"
          element={
            <div className="justify-center items-center">
              <Blog />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
        <Route
          path="/Faq"
          element={
            <div className="justify-center items-center">
              <Faq />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
        <Route
          path="/Contact"
          element={
            <div className="justify-center items-center">
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
        {/* landing */}
        <Route
          path="/"
          element={
            <div className="justify-center items-center">
              <Navbar />
              <Land />
              <Services />
              <Info />
              <Testimonial />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
        <Route
          path="/Payment"
          element={
            <div className="justify-center items-center">
              <Payment />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
        <Route
          path="/tnc"
          element={
            <div className="justify-center items-center">
              <Tnc />
              <Contact />
              <Footer />
              <Overlaymenu />
            </div>
          }
        />
        <Route
          path="/privacy"
          element={
            <div className="justify-center items-center">
              <Privacy />
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
