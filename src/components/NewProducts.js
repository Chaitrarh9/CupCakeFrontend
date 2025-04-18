import React, { useEffect, useState } from 'react';
import Cupcake from './cupcake'; 
import '../css/cupcakeHome.css';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCupcake } from "../redux/cupcakeSlice";

 const Main = () => {
  const [cupcakes, setCupcakes] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch('http://localhost:5000/cake/all') // Adjust the URL to match your backend endpoint
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        setCupcakes(data)
      })
      .catch((error) => console.error('Error fetching cakes:', error));
  }, []);

  const handleView = (cupcake) => {
    dispatch(selectCupcake(cupcake));
    navigate("/cupcake-details");
  };
 
  return (
  <div className="main">
    <h2>New Products</h2>
      <div className="cupcake-list">
          {cupcakes.slice(8, 12).map(cupcake => (
            <Cupcake
              key={cupcake._id}
              image={cupcake.image}
              cakeName={cupcake.cakeName}
              description={cupcake.description}
              price={cupcake.price}
              onView={() => handleView(cupcake)}
            />
          ))}
      </div>
  </div>
  );
};
 
export default Main;