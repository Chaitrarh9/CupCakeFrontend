import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';
import Cart from "./cart";
import Contacts from './Contacts';


export default function Header({ userId }) {
  const [isLoggedin,setIsLoggedin] =useState(false)
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  
  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);// Ensure cartItems is an array
  
  
  const handleLogOut = () => {
    // Remove token from local storage
    localStorage.removeItem('token');
    setIsLoggedin(false);
  };

  return (
    <header>
      <div className="headerLogo">
        <img src="images/headerImage.jpg" alt="The Cupcake Maker Logo" />
        The Cupcake Maker
      </div>
      <Link to="/contacts">Contact</Link>
      <Link onClick={handleShowCart}>Cart ({cartItems.length})</Link>
      {isLoggedin?(
         <Link to="/logout" onClick={handleLogOut}>Logout</Link>
      ):(
        <Link to="/login" >Login</Link>
      )}
      <Cart show={showCart} handleClose={handleCloseCart} cartItems={cartItems} />
    </header>
  );
}