import axios from "axios";
import React, {  useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Cardprop = () => {
  const [card, setcard] = useState([]);
  const [onlythree, setonlythree] = useState([]);

  useEffect(() => {
    axios
      .get("https://coffeestreet.onrender.com/coffee")
      .then((res) => {
        setcard(res.data);
        setonlythree(res.data.slice(0,3));
      })
      .catch((err) => console.log(err));
  });
  return (
    <div>
      <div className=" row my-3">
            {onlythree.map((e) => {
              return (
        <div className=" col-12 col-lg-4">
          <div className=" card position-relative p-4 rounded-4 shadow" style={{border:"solid 5px rgba(0, 0, 0,0.1)"}} >
                  <img
                    className=" rounded-4 font-roboto"
                    src={e.File}
                    alt="Title"
                  />

                  <div className="rating">
                    <span className=" fw-bold m-0 font-roboto">{e.Rating} <i className="bi bi-star-fill text-warning ms-1"></i></span>
                  </div>
                  <div className="card-body pb-0">
                    <div className=" d-flex justify-content-between align-items-center mb-3">
                      <h4 className="card-title font-roboto m-0">{e.Title}</h4>
                      <p className="card-text font-roboto m-0" style={{color:"#00000050"}}>{e.Select}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                    <NavLink className="text-decoration-none" to={`/productDetails/${e._id}`}>
                      <div className="btns border rounded-5 border-warning font-roboto">Show more</div>
                    </NavLink>
                      <h4 className="font-roboto m-0">₹ {e.Cost}</h4>
                    </div>
                  </div>      
          </div>
        </div>
              );
            })}
      </div>
    </div>
  );
};

export default Cardprop;
