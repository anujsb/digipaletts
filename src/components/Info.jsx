import React from 'react';
// import './YourComponent.css'; // Make sure to import your CSS file

const Info = () => {
  const animationSpeed = '40s';

  const imageUrls = [
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png',
    'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png',
  ];

  return (
    <div>
        <div className="slider w-full">
            {/* <div className="slide-track">
                {imageUrls.map((imageUrl, index) => (
                <div className="slide" key={index}>
                    <img src={imageUrl} height="100" width="250" alt="" />
                </div>
                ))}
            </div> */}
        </div>
    </div>
  );
};

export default Info;
