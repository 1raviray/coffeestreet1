import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import Footer from '../Footer';

const Blog = () => {
  const [Blog,setBlog]=useState([]);
  useEffect(()=>{
    axios.get("https://coffeestreet.onrender.com/Blog")
    .then((e)=>setBlog(e.data))
    .catch((e)=>console.log(e))
  })


  return (
    <div>
      <p className="para-deco"></p>
      <div className=' container-fluid bg5 d-flex align-items-center'>
            <h1 className=' fw-bold text-white m-auto'>Blogs</h1>
      </div>
      <div className=' container my-5'>
        <div className='row'>
        {
          Blog.map((e)=>{
            return(
              <div className=' col-12 col-lg-4 my-3'>
                <div className=' shadow rounded p-1 '>
                  <img src={e.Image} className=' w-100' style={{height:'250px'}} />
                  <div className=' p-3 bg-warning-subtle'>
                    <h5 className=' fw-bold font-roboto mt-2'>{e.Title}</h5>
                    <p className='content m-0 text-dark-emphasis'>{e.Content}</p>
                    <div className=' d-flex justify-content-between my-2 text-dark-emphasis' style={{fontSize:'12px'}}>
                    <span className=' font-roboto '>{e.DateandTime}</span>
                    <span className=''>{e.WriterName}</span>
                    </div>
                    <NavLink to={`/blogdetails/${e._id}`}>
                    <button className=' btns1'>Read more</button>
                    </NavLink>
                  </div>
                </div>
              </div>

            )
          })
        }
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Blog