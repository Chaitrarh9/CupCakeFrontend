import React from 'react';
import '../css/description.css';
 
const MochaCupcake = () => {
  return (
    <main className="col-9 col-t-8 col-m-12">
      <div className="caption col-12 col-t-12 col-m-12">
        <h4>Mocha Cupcake</h4>
      </div>
      <div className="row"></div>
      <div className="cupcakeDiv col-12 col-t-12 col-m-12">
        <div className="cupcakeImg">
          <img id="img1" src="images/cupcakes/mochaCupcake.png" alt="Mocha Cupcake" />
          <img id="img2" src="C:\Users\snabbava\Desktop\cupcakeshop\cup_cake_online_shop\frontend\public\images\mochaCupcake\mochaCupcake1.jpg" alt="Mocha Cupcake" />
          <img id="img3" src="C:\Users\snabbava\Desktop\cupcakeshop\cup_cake_online_shop\frontend\public\images\mochaCupcake\mochaCupcake2.jpg" alt="Mocha Cupcake" />
          <img id="img4" src="C:\Users\snabbava\Desktop\cupcakeshop\cup_cake_online_shop\frontend\public\images\mochaCupcake\mochaCupcake3.jpg" alt="Mocha Cupcake" />
        </div>
        <div className="cupcakeText">
          Topped with a fluffy frosting and chocolate sprinkles, these extra rich, extra delicious cupcakes smell wonderful and taste even better.
          <em>Rs. 40</em>
          <p>
            <label htmlFor="quantity">Number of pieces</label>
            <input type="number" min="6" max="50" defaultValue="6" /><br/>
          </p>
          <button type="submit">Add to cart</button><br/>
          <a href="#">Add to my wishlist</a>
        </div>
      </div>
    </main>
  );
};
 
export default MochaCupcake;
 