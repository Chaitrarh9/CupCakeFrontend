import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/cupcakeDetails.css"; // Add styles if needed
import AddToCart from "../components/AddToCart";
 
const CupcakeDetails = () => {
  const cupcake = useSelector(state => state.cupcake.selectedCupcake);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
 
  if (!cupcake) {
    return <p>No cupcake selected!</p>;
  }
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
 
  return (
  <div className="cupcake-details">
    <h2>{cupcake.name}</h2>
    <img src={cupcake.image} alt={cupcake.name} />
    <p>{cupcake.description}</p>
    <h3>Rs. {cupcake.price}</h3><br></br>
    <label>Quantity: </label>
    <input
        type="number"
        value={quantity}
        min="1"
        max="10"
        onChange={handleQuantityChange}
    /><br/><br></br>
    <AddToCart product={{ ...cupcake, quantity }} navigate={navigate}/>
    <button onClick={() => navigate("/")}>Back</button>
  </div>
  );
};
 
export default CupcakeDetails;