
import './App.css'
import { BrowserRouter } from "react-router-dom" ;
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Footer  from './components/Footer';
import Faq from './components/Faq';
import Blog from './components/Blog';

function App() {

  return (
    <BrowserRouter>
    
      <div className=''>
      <Navbar/>
        {/* <Hero/> */}
        <Info />
        <Services />
        <Blog/>
        <Testimonial/>
        <Faq />
        <Footer />
        
        
        
        
      </div>
      
      <div>
      
      </div>
    </BrowserRouter>
  )
}

export default App
