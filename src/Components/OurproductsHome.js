import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';

const OurproductsHome = () => {
    const [Lproduct,setLproduct]=useState([]);

    useEffect(()=>{
        axios.get('https://coffeestreet.onrender.com/coffee')
        .then((res)=>setLproduct(res.data.slice(0,8)))
        .catch((err)=>console.log(err))
    })
  return (
    <div className=' container mb-5 pb-5'>
        <div className=' row'>
            {
                Lproduct.map((e)=>{
                    return(
                        <div className=" col-12 col-lg-3 my-4">
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
                    <div className="  justify-content-between align-items-center mb-3">
                      <h5 className="card-title font-roboto m-0">{e.Title}</h5>
                      {/* <p className="card-text font-roboto m-0" style={{color:"#00000050"}}>{e.Select}</p> */}
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                    <NavLink className="text-decoration-none" to={`/productDetails/${e._id}`}>
                      <button className="button py-2   rounded-5 border-warning font-roboto">Buy now</button>
                    </NavLink>
                      <h4 className="font-roboto m-0">₹ {e.Cost}</h4>
                    </div>
                  </div>      
          </div>
        </div>
                    )
                })
            }
        </div>
        <NavLink to={"/ourproducts"}>
            <div className=' text-center mt-5'>
                <button className='button  rounded border border-warning font-roboto'>View all</button>
            </div>
        </NavLink>
    </div>
  )
}

export default OurproductsHome