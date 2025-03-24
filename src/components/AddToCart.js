import React from 'react';

const AddToCart = ({ product }) => {
  const handleAddToCart = () => {
    // Logic to add product to cart goes here.
    console.log(`${product.name} added to cart`);
  };

  return (
    <button onClick={handleAddToCart}>Add to Cart</button>
  );
};

export default AddToCart;