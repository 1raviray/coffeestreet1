import axios from 'axios';
import React, { useState } from 'react'
import contact from "../Components/Assets/Contact us.gif"
import Footer from '../Footer';

const ContactUs = () => {
  const [Name,setName]=useState('');
  const [Email,setEmail]=useState('');
  const [Phonenumber,setPhonenumber]=useState('');
  const [Message,setMessage]=useState('');
  const [Nameerror,setNameerror]=useState('');
  const [Mailerror,setMailerror]=useState('');
  const [phoneerror,setphoneerror]=useState('');
  const [messageerror,setmessageerror]=useState('');
  let nameStat=false;
  let emailStat=false;
  let phoneStat=false;
  let messageStat=false;

  const Queries=(e)=>{
    e.preventDefault();

    if(Name===""){
      setNameerror('Name is required');
    }else{
      setNameerror('');
      nameStat=true;
    }
    
    if(Email===""){
      setMailerror("Email is required");
    }else{
      setMailerror("");
      emailStat=true;
    }

    if(Phonenumber===""){
      setphoneerror('Phone number is required');
    }else if(Phonenumber.length===10){
      setphoneerror('');
      phoneStat=true;
    }else{
      setphoneerror("Phone number must be 10 digits")
    }

    if(Message===""){
      setmessageerror("Query must not be empty");
    }else{
      setMailerror("");
      messageStat=true;
    }

    if(nameStat===true && emailStat===true && phoneStat===true && messageStat===true){
      axios.post("https://coffeestreet.onrender.com/contactUs",{Name,Email,Phonenumber,Message})
      .then(()=>alert("Successfully Submited"))
      .catch((err)=>console.log(err));
      // setName("");
      // setEmail("");
      // setPhonenumber("");
      // setMessage("")
    }

  }
  return (
    <div>
        <p className=' para-deco'></p>
        <div className=' container pt-5 mt-5'>
          <h3 className=' text-center fw-bold mt-4  '>Contact us</h3>
        </div>
        <div className=' container'>
        <div className=' row'>
          <div className=' col-12 col-lg-6 m-auto'>
            <h4 className=' fw-semibold'>Write your Queries</h4>
            <form onSubmit={Queries}>
              <input type='text' className=' form-control my-3' placeholder=' Your name' value={Name} onChange={(e)=>setName(e.target.value)} />
              <p className=' text-danger m-0'>{Nameerror}</p>
              <input type='email' className=' form-control my-3' placeholder=' Your E-mail' value={Email} onChange={(e)=>setEmail(e.target.value)} />
              <p className=' text-danger m-0'>{Mailerror}</p>
              <input type='tel' className=' form-control my-3' placeholder=' Your Phone number' value={Phonenumber} onChange={(e)=>setPhonenumber(e.target.value)} />
              <p className=' text-danger m-0'>{phoneerror}</p>
              <textarea className=' form-control my-3' placeholder=' Write your Queries' rows='6' value={Message} onChange={(e)=>setMessage(e.target.value)}></textarea>
              <p className=' text-danger m-0'>{messageerror}</p>
              <input type='submit' value='Submit' className=' btn btn-warning w-100 my-3 px-5' />
            </form>
          </div>
          <div className=' col-12 col-lg-6' >
            <img src={contact} className=' w-100'  />
          </div>
        </div>
        </div>
        <div className=' container'>
        <div className='row'>
          <div className=' col-12 col-lg-6'>
            <div>
            <i class="bi bi-geo-alt-fill me-3"></i>
            <h5 className=' fw-bold underline-color pb-2 d-inline-flex'>Office address:</h5>
            <p>5-123/4, near mahindra mitaiwala, Bhanugudi junction, kakinada, 533001</p>
            </div>
            <div>
            <i class="bi bi-telephone-fill me-3"></i><p className=' d-inline-block'>+91 7894561230</p>
            </div>
            <div>
            <i class="bi bi-envelope-at-fill me-3"></i><p className=' d-inline-block'>coffeestreet@gmail.com</p>
            </div>
          </div>
          <div className=' col-12 col-lg-6'>
          <iframe className=' w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1201.9868044858517!2d82.23437125263914!3d16.971092583704447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a382813574a0171%3A0x1ea36a1b5febf811!2sBhanugudi%20centre!5e0!3m2!1sen!2sin!4v1720548858393!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ContactUs