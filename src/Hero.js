import React from "react";
import hero from "../src/Components/Assets/hero.png";
import decoration from "../src/Components/Assets/decoration.png";
import Cardprop from "./Cardprop";  
import Deliveryservice from "./Deliveryservice";
import AboutusHome from "./Components/AboutusHome";
import OurproductsHome from "./Components/OurproductsHome";
import Reviews from "./Components/Reviews";
import Subscribe from "./Components/Subscribe";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import 'animate.css';


const Hero = () => {
  return (
    <div className="hero-color position-relative" style={{ height: "135vh"}}>
      <div className=" container ">
        <div className="row">
          <div
            className=" col-12 col-lg-6 align-items-center d-flex"
            style={{ height: "80vh" }}
          >
            <div className="opacity">
              <h1 className=" font-roboto fw-bold">
                Enjoy your <span className=" orange">coffee</span>
                <br></br> before your activity
              </h1>
              <p className=" font-roboto text-dark-emphasis">
                Boost your productivitity and build your<br></br> mood with a
                glass of coffee in the morning
              </p>
              <NavLink to={"/ourproducts"}>
              <button className=" button">
                Order now
                  <i className=" bi bi-cart ms-3 px-2 py-1 bg-orange icon-hide d-inline-block rounded-circle"></i>
              </button>
              </NavLink>
              <button className=" button1 ms-3 orange">More menu</button>
            </div>
          </div>
          <div className=" col-12 col-lg-6 position-relative">
            <span className=" px-5 py-2 bg-white ms-3 rounded-pill hero-deco position-absolute font-roboto fw-bold zoomin1">
              cappuccino
            </span>
            <span className=" px-4 py-2 bg-white ms-3 rounded-pill hero-deco1 position-absolute font-roboto fw-bold zoomin2">
              4.8 <i className="bi bi-star-fill text-warning ms-1"></i>
            </span>
            <img src={hero} className="w-100 hero-img z-2 zoomin" alt="" />
            <p className="circle zoomin"></p>
          </div>
        </div>
      </div>
      <img src={decoration} alt="" className="deco position-decoration" />
      <img src={decoration} alt="" className="deco position-decoration1" />
      <p className=" decoration3"></p>
      <div className=" container my-5">
        <h3 className=" fw-bold ">Popular <span className="underline-color pb-1">Now</span></h3>
        
          <Cardprop/>
      </div>
        <Deliveryservice/>
        <AboutusHome/>
        <div className=" container" >
        <h3 className=" fw-bold mt-5">Our <span className="underline-color pb-1">Products</span></h3>
        <OurproductsHome/>
        </div>
        <Reviews/>
        <Subscribe/>
        <Footer/>
    </div>
  );
};

export default Hero;
