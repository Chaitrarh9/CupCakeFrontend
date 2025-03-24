import React, { useEffect, useState } from 'react';
import '../css/cupcakeHome.css';
 
const Cupcake = ({ image, cakeName, description, price, onView }) => {
  console.log('Cupcake Props:', { image, cakeName, description, price });
  console.log(image)

  return (
  <div className="cupcakeDiv col-3 col-t-6 col-m-6">
    <h4>{cakeName}</h4>
    <img src={`http://localhost:5000/uploads/${image}`}  alt={cakeName} />
    <div className="cupcakeText">
      
      <p>{description}</p>
    </div>
    <h4>Rs. {price}</h4>
    <button className="link" onClick={onView}>View</button> {/* ✅ Updated */}
    <button className="link">Add to cart</button>
  </div>
  );
};
 
export default Cupcake;