import React, { useState } from "react";
import Adminregisters from "./Adminregisters";
import AdminBlogUpload from "./AdminBlogUpload";
import AdminContactus from "./AdminContactus";
import Admincoffee from "./Admincoffee";
import logo from "../Components/Assets/COFFEE STREET Logo 2.png"
import { Link } from "react-router-dom";
import profile from '../Components/Assets/profile.jpg'
import Overview from "./Overview";
import AdminCoffeeall from "./AdminCoffeeall";

const Admin = () => {
  const [style,setstyle]=useState('col10')
  const mouseenter=()=>{
    setstyle('col9')
  }
  const mouseleave=()=>{
    setstyle('col10')
  }



  const [visible,setvisible]=useState('');
  const [title,settitle]=useState('Overview');

  const dashboardView=()=>{
    if(visible===""){
      return <Overview/>
    }else if(visible==="customers"){
      return <Adminregisters/>
    }else if(visible==="upload product"){
      return <AdminCoffeeall/>
    }else if(visible==="upload blog"){
      return <AdminBlogUpload/>
    }else if(visible==="queries"){
      return <AdminContactus/>
    }
  }

  return (
    <div className="" style={{background:'#f6f6f6'}}>
      <div className=" container-fluid p-0 font-roboto">
        <div className=" row gx-0">
          <div className=" col2 " onMouseEnter={mouseenter} onMouseLeave={mouseleave} style={{background:'#2F2105',height:'100vh'}}>
            <div className=" overflow-hidden ">
              <Link className="navbar-brand" to={'/'}><img src={logo} className='logo my-4' /></Link>
              <button onClick={()=>{setvisible('');settitle('Overview')}}  className="  border-0 adminbtn"><i class=" fs-5 me-2 bi bi-clipboard-data-fill"></i><span>Overview</span></button>
              <button onClick={()=>{setvisible('customers');settitle('Customers')}} className="  border-0 adminbtn  "><i class=" fs-5 me-2 bi bi-people-fill"></i>Customers</button>
              <button onClick={()=>{setvisible('upload product');settitle('Products')}} className="  border-0 adminbtn"><i class=" fs-5 me-2 bi bi-box2-fill"></i>Product</button>
              <button onClick={()=>{setvisible('upload blog');settitle('Blogs')}} className="  border-0 adminbtn"><i class=" fs-5 me-2 bi bi-journal-bookmark-fill"></i>Blogs</button>
              <button onClick={()=>{setvisible('queries');settitle('Queries')}} className="  border-0 adminbtn"><i class=" fs-5 me-2 bi bi-question-square-fill"></i>Queries</button>
            </div>
          </div>

          <div className={style}>
              <div className=" d-flex justify-content-center align-items-center bg-white px-5 my-2" >
              <span className=" fw-bold fs-3">{title}</span>
              <div className=" position-relative search-bar m-auto my-3">
                <input type="text" className="border-0 bg-transparent ps-3 w-100" style={{outline:'none'}} placeholder="Search here" /><i class="bi bi-search position-absolute" style={{right:'10px'}}></i>
              </div>
                <div className="position-relative rounded-circle border d-flex justify-content-center align-items-center mx-4 " style={{height:'36px',width:'36px'}}>
                <i class="bi bi-bell"></i>
                <span className="red-dot"></span>
                </div>
                <div className=" d-flex align-items-center">
                  <img className=" profile me-2" src={profile} />
                  <div className=" d-flex flex-column">
                  <h6 className=" fw-semibold m-0">Ravi</h6>
                  <span style={{fontSize:'12px'}}>Admin</span>
                  </div>
                </div>
              </div>
              {dashboardView()}
              
          </div>

        </div>
      </div>
    </div>
  );
};

export default Admin;

    // <Admincoffee/>
    // <Adminregisters/>
    // <AdminContactus/>
    // <AdminBlogUpload/>