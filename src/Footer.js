import React from 'react'
import logo from './Components/Assets/COFFEE STREET Logo - Original - 5000x5000.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' container-fluid text-bg-dark mt-5 py-5 px-0 bottom-0'>
        <div className=' row gx-0'>
            <div className=' col-12 col-lg-3 text-center'>
                <img className='logo p-2 rounded-5 bg-white' src={logo} />
                <p className=' text-light mt-3 small-font'>All rights reserved</p>
            </div>
            <div className=' col-12 col-lg-3 text-center'>
            <ul className=" list-unstyled  ms-auto">
                <li className="nav-item">
                <Link className="nav-link fw-bold fs-5 mb-2" aria-current="page" to={"/"} >Links</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/"}>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={"/aboutus"}>About us</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={"/ourproducts"}>Our products</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link " to={"/"}>Delivery</Link>
                </li>
            </ul>
            </div>
            <div className=' col-12 col-lg-3 text-center '>
            <ul className=" list-unstyled  ms-auto">
                <li className="nav-item">
                <Link className="nav-link fw-bold fs-5 mb-2" aria-current="page" to={"/"} >Products</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to={"/"}>Coffee</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={"/aboutus"}>Sandwich</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={"/ourproducts"}>Waffles</Link>
                </li>
                {/* <li className="nav-item">
                <Link className="nav-link " to={"/"}>Delivery</Link>
                </li> */}
            </ul>
            </div>
            <div className=' col-12  col-lg-3 text-center m-auto'>
                <div>
                <i className=" bi bi-instagram mx-2"></i><i className=" bi bi-twitter-x mx-2"></i><i className=" bi bi-facebook mx-2"></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer