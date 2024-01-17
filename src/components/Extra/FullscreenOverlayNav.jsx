// FullscreenOverlayNav.jsx

import React, { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

const FullscreenOverlayNav = () => {
  const [active, setActive] = useState(false);

  return (
    <><div className='z-35'>
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn  justify-center items-center">
      <RxHamburgerMenu style={{ fontSize: '30px' }}/>
      </label>
      <div className="wrapper">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Feedback</a></li>
        </ul>
      </div>
    </div>
      
    </>
  );
};

export default FullscreenOverlayNav;
