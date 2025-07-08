
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';

const OurProducts = () => {
  const [products,setproducts]=useState([]);
  const [filters,setfilters]=useState([]);
  const [data1,setdata1]=useState([]);
  const [dates,setdates]=useState(true);
  
  useEffect(()=>{
    axios.get("https://coffeestreet.onrender.com/coffee")
    .then((res)=>{
      setproducts(res.data);
      setdata1(res.data)
    })
    .catch((err)=>console.log(err))
  })
    // const filtering=()=>{
    //   if(setfilters(e.select)===''){
    //     setfilters(products);
    //     setdates(false);
    //     return e;
    //   }else if(setfilters(e.Select)==='Coffee'){
    //     setfilters(products.filter((e)=>{e.Select==="coffee"}))
    //     setdates(false);
    //     return e;
    //   }
    // }

    return (
      <>
      <p className=' para-deco'></p>
      <div className=' container-fluid my-5 py-5'>
      <div className=' row'>
        <div className=' col-12 col-lg-3 d-flex flex-column'>
          <div className=' sticky d-flex flex-column p-5 mt-4 rounded-2 shadow' style={{background:'#F6EBDA'}}>
          <h3 className=' fw-bold text-center'>Filter</h3>
          <button className=' btn btn-outline-dark my-3' onClick={()=>{setfilters(products);setdates(false)}}>All</button>
          <button className=' btn btn-outline-dark mb-3' onClick={()=>setfilters(products.filter((e)=>{if(e.Select==="Coffee"){return e};setdates(false)}))} >Coffee</button>
          <button className=' btn btn-outline-dark mb-3' onClick={()=>setfilters(products.filter((e)=>{if(e.Select==="Sandwich"){return e};setdates(false)}))}>Sandwich</button>
          <button className=' btn btn-outline-dark mb-3' onClick={()=>setfilters(products.filter((e)=>{if(e.Select==="Waffles"){return e};setdates(false)}))}>Waffles</button>
          <button className=' btn btn-outline-dark mb-3' onClick={()=>setfilters(products.filter((e)=>{if(e.Cost <300){return e};setdates(false)}))}>Below ₹ 300</button>
          <button className=' btn btn-outline-dark mb-3' onClick={()=>setfilters(products.filter((e)=>{if(e.Cost <400){return e};setdates(false)}))}>Below ₹ 400</button>
          <button className=' btn btn-outline-dark mb-3' onClick={()=>setfilters(products.filter((e)=>{if(e.Cost <500){return e};setdates(false)}))}>Below ₹ 500</button>
          <button className=' btn btn-outline-dark mb-3' onClick={()=>{setfilters(products.sort((a,b)=>(b.Rating-a.Rating)));setdates(false)}}>Top Rated</button>
          </div>
        </div>
        <div className=' col-9'>

          <div className=' row px-3'>
          {dates &&
            data1.map((e)=>{
              return(
                <div className=" col-12 col-lg-4 my-4" key={e._id}>
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
                      <button className="button  rounded-5 border-warning font-roboto">Buy now</button>
                    </NavLink>
                      <h4 className="font-roboto m-0">₹ {e.Cost}</h4>
                    </div>
                  </div>      
          </div>
        </div>
              )
            })
          }
          {
            filters.map((e)=>{
              return(
                <div className=" col-12 col-lg-4 my-4" key={e._id}>
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
                      <button className="button  rounded-5 border-warning font-roboto">Buy now</button>
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
        </div>
      </div>
    </div>
      <Footer/>
    </>
  )
}

export default OurProducts