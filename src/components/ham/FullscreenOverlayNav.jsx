// // FullscreenOverlayNav.jsx

// import React, { useState } from 'react';
// import { RxHamburgerMenu } from "react-icons/rx";
// import { Link  } from 'react-router-dom';

// const FullscreenOverlayNav = () => {
//   const [active, setActive] = useState(false);

//   return (
//     <><div className='z-35'>
//       <input type="checkbox" id="active" />
//       <label htmlFor="active" className="menu-btn flex justify-center items-center">
//       <RxHamburgerMenu style={{ fontSize: '30px' }}/>
//       </label>
//       <div className="wrapper">
//         <ul>
          
//           <li><Link to="/About" role="button">About</Link></li>
//           <li><Link to="/Services" role="button">Services</Link></li>
//           <li><Link to="/Blog" role="button">Blog</Link></li>
//           {/* <li><Link to="/Testimonial" role="button">Testimonial</Link></li> */}
//           <li><Link to="/Faq" role="button">FAQ</Link></li>
//           <li><Link to="/Contact" role="button">Contact</Link></li>
//           <li><Link to="/" role="button" >Home</Link></li>
//         </ul>
//       </div>
//     </div>
      
//     </>
//   );
// };

// export default FullscreenOverlayNav;


import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from 'react-router-dom';

const FullscreenOverlayNav = () => {
  const [active, setActive] = useState(false);

  const closeOverlay = () => {
    setActive(false);
  };

  return (
    <>
      <div className='z-35'>
        <input type="checkbox" id="active" checked={active} onChange={() => setActive(!active)} />
        <label htmlFor="active" className="menu-btn flex justify-center items-center">
          <RxHamburgerMenu style={{ fontSize: '30px' }} />
        </label>
        <div className="wrapper">
          <ul>
            <li><Link to="/About" role="button" onClick={closeOverlay}>About</Link></li>
            <li><Link to="/Services" role="button" onClick={closeOverlay}>Services</Link></li>
            <li><Link to="/Blog" role="button" onClick={closeOverlay}>Blog</Link></li>
            {/* <li><Link to="/Testimonial" role="button">Testimonial</Link></li> */}
            <li><Link to="/Faq" role="button" onClick={closeOverlay}>FAQ</Link></li>
            <li><Link to="/Contact" role="button" onClick={closeOverlay}>Contact</Link></li>
            <li><Link to="/" role="button" onClick={closeOverlay}>Home</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default FullscreenOverlayNav;
