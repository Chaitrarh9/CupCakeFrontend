import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Footer from "./components/Footer";
import MochaCupcake from "./components/MochaCupcake";
import Login from "./components/Login";
import Register from "./components/Register";
import CupcakeMaker from "./components/cupcakeMaker";
import CupcakeDetails from "./pages/CupcakeDetails";
import MyAccount from "./components/MyAccount";
import NewProducts from "./components/NewProducts";
import Specials from "./components/Specials";
import SiteMap from "./components/SiteMap";
import Blog from "./components/Blog";
import Contacts from "./components/Contacts"; // Add this import
import GiftsCombos from "./categories/GiftsCombos";
import PremiumCupcakes from "./categories/PremiumCupcakes";
import BirthdayCupcakes from "./categories/BirthdayCupcakes";
import CustomCupcakes from "./categories/CustomCupcakes";
import CartoonCupcakes from "./categories/CartoonCupcakes";
import SuperheroCupcakes from "./categories/SuperheroCupcakes";
import CheesecakeCupcakes from "./categories/CheesecakeCupcakes";
import HolidayCupcakes from "./categories/HolidayCupcakes";
import EgglessCupcakes from "./categories/EgglessCupcakes";
import MidnightDelivery from "./categories/MidnightDelivery";


const App = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$10", image: "image1.jpg" },
    { id: 2, name: "Product 2", price: "$20", image: "image2.jpg" },
  ];
 
  const specials = [
    { id: 1, name: "Special 1", price: "$15", image: "special1.jpg" },
    { id: 2, name: "Special 2", price: "$25", image: "special2.jpg" },
  ];
 
  const blogPosts = [
    {
      id: 1,
      title: "5 Must-Try Cupcake Flavors 🍓",
      content: "Explore our top cupcake flavors, from classic chocolate to exotic mango delight!",
    },
    {
      id: 2,
      title: "Baking Tips for the Perfect Cupcake 🎂",
      content: "Learn how to achieve the perfect fluffiness, frosting consistency, and moist texture.",
    },
    {
      id: 3,
      title: "Behind the Scenes: How We Make Our Cupcakes 👩‍🍳",
      content: "A sneak peek into our kitchen, where the magic of cupcake-making happens!",
    },
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <Aside className="col-md-3" />
            <div className="col-md-9">
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Main />
                      <CupcakeMaker />
                    </>
                  }
                />
                <Route path="/mochaCupcake" element={<MochaCupcake />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cupcake-details" element={<CupcakeDetails />} />
                <Route path="/my-account" element={<MyAccount />} />
                <Route path="/new-products" element={<NewProducts products={products} />} />
                <Route path="/specials" element={<Specials specials={specials} />} />
                <Route path="/site-map" element={<SiteMap />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/blog" element={<Blog posts={blogPosts} />} />

                <Route path="/categories/gifts-combos" element={<GiftsCombos />} />
                <Route path="/categories/premium-cupcakes" element={<PremiumCupcakes />} />
                <Route path="/categories/birthday-cupcakes" element={<BirthdayCupcakes />} />
                <Route path="/categories/custom-cupcakes" element={<CustomCupcakes />} />
                <Route path="/categories/cartoon-cupcakes" element={<CartoonCupcakes />} />
                <Route path="/categories/superhero-cupcakes" element={<SuperheroCupcakes />} />
                <Route path="/categories/cheesecake-cupcakes" element={<CheesecakeCupcakes />} />
                <Route path="/categories/holiday-cupcakes" element={<HolidayCupcakes />} />
                <Route path="/categories/eggless-cupcakes" element={<EgglessCupcakes />} />
                <Route path="/categories/midnight-delivery" element={<MidnightDelivery />} />
               
              </Routes>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;