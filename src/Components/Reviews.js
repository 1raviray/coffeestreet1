import React from 'react'
import bg from './Assets/bg.png'
import t1 from './Assets/t1.jpg'
import t2 from './Assets/t2.jpg'
import t3 from './Assets/t3.jpg'
import t4 from './Assets/t4.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Reviews = () => {
  return (
    <div className=' '>
        <div className='position-relative container-fluid p-0 my-5' >
            <div className=' row gx-0'>
                <div className='col-12 col-lg-3 m-auto d-flex align-items-center ps-5' style={{height:'70vh'}}>
                    <div>
                        <h2 className=' fw-bold font-roboto'>What they say about us</h2>
                        <p className=' pe-5 font-roboto text-dark-emphasis'>We always provide the best service and always maintain the quality of the coffee</p>
                    </div>
                </div>
                <div className=' col-12 col-lg-8 m-auto'>
                <OwlCarousel className='owl-theme' loop margin={10} autoplay autoplaySpeed={2000} autoplayTimeout={2000}>
                <div class='item position-relative'>
                        <img src={t1} className='w-75 testimonial-img' alt=''/>
                        <div className=' position-absolute  testimonial'>
                            <h5 className=' fw-semibold text-dark-emphasis font-roboto'>Chandana</h5>
                            <i className=' bi bi-star-fill text-warning mx-1'></i><i className=' bi bi-star-fill text-warning mx-1'></i><i className=' bi bi-star-fill text-warning mx-1'></i><i className=' bi bi-star-fill text-warning mx-1'></i><i className=' bi bi-star-fill text-warning mx-1'></i>
                            <p className=' text-dark-emphasis fw-normal fs-6'>I really love the cappucino,<br/>the coffee was very smooth</p>
                        </div>
                </div>
                <div class='item position-relative'>
                        <img src={t2} className='w-75 testimonial-img' alt=''/>
                        <div className=' position-absolute  testimonial'>
                            <h5 className=' fw-semibold text-dark-emphasis font-roboto'>Bhaskar</h5>
                            <i className=' bi bi-star-fill text-warning mx-1'></i><i className=' bi bi-star-fill text-warning mx-1'></i><i className=' bi bi-star-fill text-warning mx-1'></i><i className=' bi bi-star-fill text-warning mx-1'></i>
                            <p className=' text-dark-emphasis fw-normal fs-6'>I really love the cappucino,<br/>the coffee was very smooth</p>
                        </div>
                </div>
                <div class='item position-relative'>
                        <img src={t3} className='w-75 testimonial-img' alt=''/>
                        <div className=' position-absolute  testimonial'>
                            <h5 className=' fw-semibold text-dark-emphasis font-roboto'>Joshitha</h5>
                            <i className=' bi bi-star-fill text-warning mx-1'></i><i className=' bi bi-star-fill text-warning mx-1'></i><i className=' bi bi-star-fill text-warning mx-1'></i><i className=' bi bi-star-fill text-warning mx-1'></i><i className=' bi bi-star-fill text-warning mx-1'></i>
                            <p className=' text-dark-emphasis fw-normal fs-6'>I really love the cappucino,<br/>the coffee was very smooth</p>
                        </div>
                </div>
                <div class='item position-relative'>
                        <img src={t4} className='w-75 testimonial-img' alt=''/>
                        <div className=' position-absolute  testimonial'>
                            <h5 className=' fw-semibold text-dark-emphasis font-roboto'>Ravi</h5>
                            <i className=' bi bi-star-fill text-warning mx-1'></i><i className=' bi bi-star-fill text-warning mx-1'></i><i className=' bi bi-star-fill text-warning mx-1'></i><i className=' bi bi-star-fill text-warning mx-1'></i>
                            <p className=' text-dark-emphasis fw-normal fs-6'>I really love the cappucino,<br/>the coffee was very smooth</p>
                        </div>
                </div>
                    
                </OwlCarousel>
                </div>
            </div>
        <img src={bg} alt='' className='position-absolute bgreview' />
        </div>
    </div>
  )
}

export default Reviews