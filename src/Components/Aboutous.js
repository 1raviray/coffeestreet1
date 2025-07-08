import React from "react";
import bean from "./Assets/bean.png";
import delivery from "./Assets/delivery.png";
import cup from "./Assets/cup.png";
import cs1 from "./Assets/cs1.jpg";
import cs2 from "./Assets/cs2.avif";
import cs3 from "./Assets/cs3.jpg";
import cs4 from "./Assets/cs4.webp";
import cs5 from "./Assets/cs5.webp";
import cs6 from "./Assets/cs6.jpg";
import cs7 from "./Assets/cs7.jpg";
import m2 from "./Assets/m2.jpg";
import m3 from "./Assets/m3.webp";
import m4 from "./Assets/m4.avif";
import m5 from "./Assets/m5.jpg";
import s1 from "./Assets/s1.jpg";
import s2 from "./Assets/s2.webp";
import s3 from "./Assets/s3.jpg";
import s4 from "./Assets/s4.png";
import bg from './Assets/bg.png'
import t1 from './Assets/t1.jpg'
import t2 from './Assets/t2.jpg'
import t3 from './Assets/t3.jpg'
import t4 from './Assets/t4.jpg'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "../Footer";

const Aboutous = () => {
  return (
    <div className=" mt-4 pt-5">
      <p className="para-deco"></p>
      <div className=" container-fluid bg2 p-0">
        <h1 className=" d-flex align-items-center justify-content-center font-anton text-white h-100 ">
          Bringing the Best Coffee <br />
          to Your Doorstep
        </h1>
      </div>
      <div className=" container my-5">
        <div className=" row">
          <div className=" col-3">
            <h3 className=" fw-bold font-roboto underline-color d-inline-block pb-2">
              From Bean to Cup
            </h3>
          </div>
          <div className=" col-9">
            <div className=" row">
              <div className=" col-1">
                <img alt="" src={bean} className=" about-img" />
              </div>
              <div className=" col-10  position-relative">
                <img
                  alt=""
                  src={delivery}
                  className="bike-anime about-img position-absolute"
                />
              </div>
              <div className=" col-1">
                <img alt="" src={cup} className=" about-img" />
              </div>
            </div>
          </div>
        </div>
        <p className=" indent mt-3">
          At Coffee Street , our journey began with a simple love for coffee.
          Our founders, Raviraj, started this venture to share their passion for
          premium coffee with the world. What started as a small coffee cart has
          now become a nationwide delivery service, committed to delivering
          freshly roasted coffee to your doorstep.
        </p>
      </div>
      <div
        className=" container-fluid p-0 overflow-hidden"
        style={{ height: "138vh" }}
      >
        <div className="row gx-0">
          <div className="col-12 col-lg-4 ">
            <img className=" w-100 p-1" alt="" src={cs2} />
            <img className=" w-100 p-1" alt="" src={cs7} />
          </div>
          <div className=" col-12 col-lg-4">
            <img className=" w-100 p-1" alt="" src={cs1} />
            <img className=" w-100 p-1" alt="" src={cs4} />
            <img className=" w-100 p-1" alt="" src={cs6} />
          </div>
          <div className=" col-12 col-lg-4">
            <img className=" w-100 p-1" alt="" src={cs5} />
            <img className=" w-100 p-1" alt="" src={cs3} />
          </div>
        </div>
      </div>
      <div className=" container-fluid my-5">
        <h2 className=" fw-bold underline-color d-inline-block pb-2 ms-5">
          Our Mission
        </h2>
        <div className=" row bg-warning-subtle p-5">
          <div className=" col-12 col-lg-5 d-flex align-items-center">
            <div className=" my-3">
              <h5 className=" d-inline me-3">Our Commitment:</h5>
              <p className=" d-inline ">
                We believe in quality, sustainability, and community. Our
                mission is to provide coffee lovers with the highest quality
                beans sourced from ethical farms around the world. We are
                committed to supporting fair trade and ensuring that every cup
                you drink makes a positive impact.
              </p>
            <ol className=" mt-3">
              <li>High-Quality Beans</li>
              <li>Ethical Sourcing</li>
              <li>Sustainability</li>
              <li>Community Support</li>
            </ol>
            </div>
          </div>
          <div className=" col-12 col-lg-7 h-100">
            <div id="carouselExample" class="carousel slide">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={m2} class="d-block w-100" style={{height:'450px'}} alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={m4} class="d-block w-100" style={{height:'450px'}} alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={m3} class="d-block w-100" style={{height:'450px'}} alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={m5} class="d-block w-100" style={{height:'450px'}} alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" container my-5 bg4 position-relative" style={{height:'190vh'}}>
        <h2 className=" fw-bold underline-color d-inline-block pb-2">
          Our Process
        </h2>
        <div className=" circle-border"></div>
        <div className=" circle-border1"></div>
        <div className=" circle-border2"></div>
        <div className=" mb-5">
          <h5 className=" d-inline me-3 fw-semibold">From Farm to Cup:</h5>
          <p className=" d-inline">
            We take pride in our meticulous process of sourcing, roasting, and
            delivering coffee. Here’s how we do it.
          </p>
        </div>
        <div className=" position-relative">
          <div className="col-4 position-relative">
            <img src={s1} className=" w-100" alt="" />
            <span
              className="p-2 position-absolute fs-1 text-bg-warning"
              style={{ left: "-15px", top: "-15px" }}
            >
              1
            </span>
            <div
              className=" col-6 position-absolute top-50 translate-middle-y p-5 text-bg-warning"
              style={{ right: "-180px" }}
            >
              <p>
                <span className=" fw-bold fs-5">Sourcing: </span>We partner with
                farmers who use sustainable practices.
              </p>
            </div>
          </div>
          <div
            className="col-4 position-absolute top-50"
            style={{ right: "-0px" }}
          >
            <img src={s2} className=" w-100" alt="" />
            <span
              className="p-2 position-absolute fs-1 text-bg-warning"
              style={{ left: "-15px", top: "-15px" }}
            >
              2
            </span>
            <div
              className=" col-6 position-absolute top-50 translate-middle-y p-5 text-bg-warning"
              style={{ left: "-180px" }}
            >
              <p>
                <span className=" fw-bold fs-5">Roasting: </span>Our expert
                roasters ensure each batch is perfect.
              </p>
            </div>
          </div>
          <div className="col-4 position-absolute" style={{ top: "600px" }}>
            <img src={s3} className=" w-100" alt="" />
            <span
              className="p-2 position-absolute fs-1 text-bg-warning"
              style={{ left: "-15px", top: "-15px" }}
            >
              3
            </span>
            <div
              className=" col-6 position-absolute top-50 translate-middle-y p-5 text-bg-warning"
              style={{ right: "-180px" }}
            >
              <p>
                <span className=" fw-bold fs-5">Packaging: </span>Our
                eco-friendly packaging keeps your coffee fresh.
              </p>
            </div>
          </div>
          <div
            className="col-4 position-absolute"
            style={{ right: "-0px", top: "800px" }}
          >
            <img src={s4} className=" w-100 bg-warning-subtle" alt="" />
            <span
              className="p-2 position-absolute fs-1 text-bg-warning"
              style={{ left: "-15px", top: "-15px" }}
            >
              4
            </span>
            <div
              className=" col-6 position-absolute top-50 translate-middle-y p-5 text-bg-warning"
              style={{ left: "-180px" }}
            >
              <p>
                <span className=" fw-bold fs-5">Delivery: </span>Fast and
                reliable delivery to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="position-relative container-fluid p-0 my-5">
        <div className=" row gx-0">
          <div
            className="col-12 col-lg-3 m-auto d-flex align-items-center ps-5"
            style={{ height: "70vh" }}
          >
            <div>
              <h2 className=" fw-bold font-roboto">What they say about us</h2>
              <p className=" pe-5 font-roboto text-dark-emphasis">
                We always provide the best service and always maintain the
                quality of the coffee
              </p>
            </div>
          </div>
          <div className=" col-12 col-lg-8 m-auto">
            <OwlCarousel className="owl-theme" loop margin={10} autoplay autoplaySpeed={2000} autoplayTimeout={2000}>
              <div class="item position-relative">
                <img src={t1} className="w-75 testimonial-img" alt="" />
                <div className=" position-absolute  testimonial">
                  <h5 className=" fw-semibold text-dark-emphasis font-roboto">
                    Chandana
                  </h5>
                  <i className=" bi bi-star-fill text-warning mx-1"></i>
                  <i className=" bi bi-star-fill text-warning mx-1"></i>
                  <i className=" bi bi-star-fill text-warning mx-1"></i>
                  <i className=" bi bi-star-fill text-warning mx-1"></i>
                  <i className=" bi bi-star-fill text-warning mx-1"></i>
                  <p className=" text-dark-emphasis fw-normal fs-6">
                    I really love the cappucino,
                    <br />
                    the coffee was very smooth
                  </p>
                </div>
              </div>
              <div class="item position-relative">
                <img src={t2} className="w-75 testimonial-img" alt="" />
                <div className=" position-absolute  testimonial">
                  <h5 className=" fw-semibold text-dark-emphasis font-roboto">
                    Bhaskar
                  </h5>
                  <i className=" bi bi-star-fill text-warning mx-1"></i>
                  <i className=" bi bi-star-fill text-warning mx-1"></i>
                  <i className=" bi bi-star-fill text-warning mx-1"></i>
                  <i className=" bi bi-star-fill text-warning mx-1"></i>
                  <p className=" text-dark-emphasis fw-normal fs-6">
                    I really love the cappucino,
                    <br />
                    the coffee was very smooth
                  </p>
                </div>
              </div>
              <div class="item position-relative">
                <img src={t3} className="w-75 testimonial-img" alt="" />
                <div className=" position-absolute  testimonial">
                  <h5 className=" fw-semibold text-dark-emphasis font-roboto">
                    Joshitha
                  </h5>
                  <i className=" bi bi-star-fill text-warning mx-1"></i>
                  <i className=" bi bi-star-fill text-warning mx-1"></i>
                  <i className=" bi bi-star-fill text-warning mx-1"></i>
                  <i className=" bi bi-star-fill text-warning mx-1"></i>
                  <i className=" bi bi-star-fill text-warning mx-1"></i>
                  <p className=" text-dark-emphasis fw-normal fs-6">
                    I really love the cappucino,
                    <br />
                    the coffee was very smooth
                  </p>
                </div>
              </div>
              <div class="item position-relative">
                <img src={t4} className="w-75 testimonial-img" alt="" />
                <div className=" position-absolute  testimonial">
                  <h5 className=" fw-semibold text-dark-emphasis font-roboto">
                    Ravi
                  </h5>
                  <i className=" bi bi-star-fill text-warning mx-1"></i>
                  <i className=" bi bi-star-fill text-warning mx-1"></i>
                  <i className=" bi bi-star-fill text-warning mx-1"></i>
                  <i className=" bi bi-star-fill text-warning mx-1"></i>
                  <p className=" text-dark-emphasis fw-normal fs-6">
                    I really love the cappucino,
                    <br />
                    the coffee was very smooth
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
        <img src={bg} alt="" className="position-absolute bgreview" />
      </div>
      <Footer/>
    </div>
  );
};

export default Aboutous;
