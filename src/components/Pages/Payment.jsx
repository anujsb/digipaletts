import React from "react";

const Payment = () => {
  return (
    <div>
        <h1 className="text-4xl  m-10 text-black ">digital marketing services</h1>
    <div className="text-black h-screen m-10 grid grid-cols-2">
      <div className="card rounded-lg border-black  bg-yellow-300 m-5 shadow-lg text-center">
        
        <h2 className="text-4xl mx-2 my-5">
        For digital marketing services
        </h2>
        <p className="text-2xl mx-2">Silver Pacakge : 20k(excluding GST)</p>
        <p className="text-2xl mx-2">Validity : One month</p>
        {/* <p className="text-2xl mx-2">Maintenance charge : 2000 per month</p> */}
        <button className="bg-white m-5">Rs 20,000</button>
      </div>
      <div className="card rounded-lg border-black bg-yellow-300  m-5 shadow-lg text-center">
        <h1 className="text-4xl mx-2 my-5">For Website Package</h1>
        <p className="text-2xl mx-2">Static website : 20,000</p>
        <p className="text-2xl mx-2">Maintenance charge : 2000 per month</p>
        <button className="bg-white m-5">Rs 20,000</button>
      </div>
    </div>
    </div>
  );
};

export default Payment;
