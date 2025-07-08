import React from 'react'
import bg from './Assets/Aboutus.jpg'
import { NavLink } from 'react-router-dom'

const AboutusHome = () => {
  return (
    <div>
        <div className=' container-fluid position-relative bg ' style={{marginTop:'250px'}}>
            <div className='row'>
                <div className=' col-12 col-lg-6'>
                    <img src={bg} className='position-absolute rounded-3 shadow' style={{width:'350px',top:"-150px",left:'200px',border:'10px rgba(225,225,225) solid'}} alt='' />
                </div>
                <div className=' col-12 col-lg-3 d-flex align-items-center mt-5' style={{height:'50vh'}} >
                    <div>
                    <h2 className=" fw-bold font-roboto mb-4">About <span className="underline-color pb-1">us</span></h2>
                    <h3 className=" fw-bold font-roboto">We provide quality coffee,<br/> and ready to deliver.</h3>
                    <p className=' font-roboto text-dark-emphasis fs-6 indent' style={{textIndent:'0'}}>We are company that makes and distributes delicious drinks. Our main product is made with secret recipe and available in stores worldwide.</p>
                    <NavLink to={'/ourproducts'}>
                    <button className='button'>Get the coffee</button>
                    </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutusHome