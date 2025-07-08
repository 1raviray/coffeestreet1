import React from 'react'
import i1 from './Components/Assets/i1.png'
import i2 from './Components/Assets/i2.png'
import i3 from './Components/Assets/i3.png'

const Deliveryservice = () => {
  return (
    <div className=' container my-5 pt-5'>
        <h3 className=" fw-bold my-5">How to use delivery <span className="underline-color pb-1">service</span></h3>
        <div className=' row'>
            <div className=' col-12 col-lg-4'>
                <div className=' text-center'>
                <img className=' service-img my-2' src={i1} alt='' />
                <h4 className=' fw-bold font-roboto'>Choose your Coffee</h4>
                <span className=' text-dark-emphasis font-roboto'>There are 20+ coffees for you</span>
                </div>
            </div>
            <div className=' col-12 col-lg-4'>
                <div className=' text-center'>
                <img className=' service-img my-2' src={i2} alt='' />
                <h4 className=' fw-bold font-roboto'>We deliver it to you</h4>
                <span className=' text-dark-emphasis font-roboto'>Choose delivery service</span>
                </div>
            </div>
            <div className=' col-12 col-lg-4'>
                <div className=' text-center'>
                <img className=' service-img my-2' src={i3} alt='' />
                <h4 className=' fw-bold font-roboto'>Enjoy your Coffee</h4>
                <span className=' text-dark-emphasis font-roboto'>Enjoy it</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deliveryservice