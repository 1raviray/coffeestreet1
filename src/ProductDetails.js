import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import dec from './Components/Assets/coffee-7045578_1280-removebg-preview.png'
import Footer from './Footer';
import OurproductsHome from './Components/OurproductsHome';
import qr from './Components/Assets/frame.png'

const ProductDetails = () => {
    const [card, setcard] = useState("");
    const {_id}=useParams();
    const [Add,setAdd] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://coffeestreet.onrender.com/coffee/${_id}`)
        .then((res) => {
          setcard(res.data);
        })
        .catch((err) => console.log(err));
    });
    const addpro = ()=>{
        setAdd([...Add,card])
        console.log(Add);
    }
  return (
    <div className=' hero-color position-relative font-roboto' >
        <div className=' container py-5'>
            <div className='row my-5 py-5'>
                <div className=' col-12 col-lg-6 p-3'>
                    <div className=' p-5 bg-white rounded-4'>
                        <img className='w-100 rounded-4' src={card.File} alt='' />
                    </div>
                </div>
                <div className=' col-12 col-lg-6 m-auto px-5'>
                <h4 className=' underline-color d-inline pb-2'>Discription</h4>
                    <p className=' mt-4 indent'>{card.Discription}</p>
                <h4 className=''>Ingridents:</h4>
                    <p className=' mt-1'>{card.Ingredients}</p>
                    <div className=' bg-warning border  border-white border-3 p-3 rounded-3 my-4'>
                        <h4 className=' mb-3'>₹ {card.Cost}</h4>
                        <button className=' button' data-bs-toggle="modal" data-bs-target='#buynow'>Buy now</button>
                        <button className=' button ms-3' onClick={()=>addpro()}>Add to cart</button>
                    </div>
                </div>
            </div>
            <div>
                <h2>You may like</h2>
                <OurproductsHome/>
            </div>
        </div>
{/* <img src={dec} className='  position-absolute top-0 w-25 z-0' /> */}

        <div className='modal' id='buynow'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className=' modal-header justify-content-center border-bottom'>
                        <h4>{card.Title}</h4>
                    </div>
                    <div className=' modal-body text-center'>
                        <img src={qr} className=' w-50' />
                        <h5 className=' my-4  fw-bold'>or</h5>
                        <h5 className=' my-4  fw-bold'>UPI, Cards and more</h5>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ProductDetails