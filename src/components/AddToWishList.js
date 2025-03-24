import React from 'react';

const AddToWishList = ({ product }) => {
  const handleAddToWishList = () => {
    // Logic to add product to wishlist goes here.
    console.log(`${product.name} added to wishlist`);
  };

  return (
    <button onClick={handleAddToWishList}>Add to Wishlist</button>
  );
};

export default AddToWishList;