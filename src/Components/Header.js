
import React, { useState } from 'react'
import logo from "../Components/Assets/COFFEE STREET Logo - Original - 5000x5000.png"
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <div className=' position-absolute top-0 z-3 w-100'>
        <nav className="navbar navbar-expand-lg bg-transparent">
  <div className="container-fluid px-5">
    <Link className="navbar-brand" to={'/'}><img src={logo} className='logo' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav  ms-auto" >
        <li className="nav-item">
          <NavLink className="nav-link navitem" aria-current="page" to={"/"}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link navitem" to={"/aboutus"}>About us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link navitem" to={"/ourproducts"}>Our products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link navitem " to={"/blog"}>Blog</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link navitem " to={"/contactus"}>Contact us</NavLink>
        </li>
      </ul>
      <i className="bi bi-heart ms-auto pointer"></i>
      <i className="bi bi-cart ms-3 pointer"></i>
      <NavLink to={"/register"} className="text-decoration"><i className="bi bi-person ms-3 pointer"></i></NavLink>
    </div>
  </div>
</nav>
{/* <div className=' modal mod' id='popup'>
    <div className='modal-dialog'>
        <div className='modal-content'>
            <div className=' modal-header justify-content-center'>
                <h4 className="fw-bold">Register</h4>
            </div>
            <div className=' modal-body px-5'>
                <form onSubmit={registerSubmit}>
                    <input type='text' name='username' value={username} onChange={(e)=>setusername(e.target.value)}  placeholder='Username' className='mb-3 form-control' />
                    <p className=' text-danger'>{usernameError}</p>
                    <input type='email' name='email' value={email} onChange={(e)=>setemail(e.target.value)}  placeholder='Email' className='mb-3 form-control' />
                    <p className=' text-danger'>{emailError}</p>
                    <input type='tel' name='phone number' value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)}  placeholder='Phone number' className='mb-3 form-control' />
                    <p className=' text-danger'>{phoneError}</p>
                    <input type='password' name='password' value={password} onChange={(e)=>setpassword(e.target.value)}  placeholder='Password' className='mb-3 form-control' />
                    <input type='password' name='Re-enter password' value={repassword} onChange={(e)=>setrepassword(e.target.value)}  placeholder='Re-enter Password' className='mb-3 form-control' />
                    <p className=' text-danger'>{passwordError}</p>
                    <div className='d-flex align-items-center justify-content-center my-4'>
                        <input type='submit' value="Register" className='me-3 btn btn-danger' />
                        <button className=' btn btn-outline-dark' data-bs-dismiss="modal">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div> */}
    </div>
  )
}

export default Header