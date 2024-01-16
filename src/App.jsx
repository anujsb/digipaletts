
import './App.css'
import { BrowserRouter } from "react-router-dom" ;
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Footer  from './components/Footer';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Blog from './components/Blog';
import DigitalMarketing from "./components/Services/DigitalMarketing";
import SocialMarketing from "./components/Services/SocialMarketing";
import PaidAdvertising from "./components/Services/PaidAdvertising";

function App() {

  return (
    <BrowserRouter>
      
      <div className='justify-center items-center'>
        <Navbar/>
        <Hero/>
        <Info />
        <Services />
        <Blog/>
        <Testimonial/>
        <Faq />
        <Contact />
        <Footer />
        {/* <DigitalMarketing /> */}
        {/* <SocialMarketing /> */}
        {/* <PaidAdvertising /> */}
        
        
        
        
      </div>
      
      <div>
      
      </div>
    </BrowserRouter>
  )
}

export default App

