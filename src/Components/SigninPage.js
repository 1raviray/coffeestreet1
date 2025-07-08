import axios from 'axios';
import React, { useState } from 'react'
import Hero from '../Hero';
import { Link, useNavigate } from 'react-router-dom';

const SigninPage = () => {
    const [username,setusername]=useState("");
    const [phoneNumber,setphoneNumber]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [repassword,setrepassword]=useState("");
    const [usernameError,setusernameError]=useState("");
    const [phoneError,setphoneError]=useState("");
    const [emailError,setemailError]=useState("");
    const [passwordError,setpasswordError]=useState("");
    let userstat = false;
    let phonestat = false;
    let emailstat = false;
    let passwordstat = false;
    // let navigation=false;
    const navigate=useNavigate();
    
    
    // --------------Register Data to Json------------------------------

    const registerSubmit=(e)=>{
        e.preventDefault();

            if(username===""){
                setusernameError("Username must required")
            }else if(username.length===3){
                setusernameError("username must greater than 4 characters")
            }else{
                setusernameError("")
                userstat=true
            }

            if(phoneNumber===""){
                setphoneError("Phonenumber must required")
            }else if(phoneNumber.length===10){
                phonestat=true;
                setphoneError("")
            }else{
                setphoneError("Phone number must have 10 digits")
            }

            if(email===""){
                setemailError("Email is required")
            }else if(email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/)){
                setemailError("")
                emailstat=true
            }else{
                setemailError("email is in wrong format")
            }
            if(password.length===0){
                setpasswordError("Password is required")
            }else if(password.length<6){
                setpasswordError("Password must be greater than 6 characters")
            }else if(password===repassword){
                setpasswordError("")
                passwordstat=true
            }else{
                setpasswordError("Password not matched")
            }

            if(userstat===true && phonestat===true && emailstat===true && passwordstat===true){
                axios.post("https://coffeestreet.onrender.com/registers",{username,phoneNumber,email,password})
                .then((res)=>{
                    if(res.data.status==="true"){
                        navigate('/login');
                    }else{
                        alert("Email already exists");
                    }
                },
                )
                .catch((err)=>console.log(err))
                
            }
        }
  return (
    <div>
        <div className=' p-5 bg7'>
            <div className='col-4  d-flex flex-column m-auto mt-5 signin p-5 pb-3 border border-warning border-5'>
                <h4 className="fw-bold text-center mb-4">Register</h4>
                <form onSubmit={registerSubmit} action='<Hero/>'>
                    <input type='text' name='username' value={username} onChange={(e)=>setusername(e.target.value)}  placeholder='Username' className='mb-3 form-control' />
                    <p className=' text-danger'>{usernameError}</p>
                    <input type='email' name='email' value={email} onChange={(e)=>setemail(e.target.value)}  placeholder='Email' className='mb-3 form-control' />
                    <p className=' text-danger'>{emailError}</p>
                    <input type='tel' name='phone number' value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)}  placeholder='Phone number' className='mb-3 form-control' />
                    <p className=' text-danger'>{phoneError}</p>
                    <input type='password' name='password' value={password} onChange={(e)=>setpassword(e.target.value)}  placeholder='Password' className='mb-3 form-control' />
                    <input type='password' name='Re-enter password' value={repassword} onChange={(e)=>setrepassword(e.target.value)}  placeholder='Re-enter Password' className='mb-3 form-control' />
                    <p className=' text-danger'>{passwordError}</p>
                    <div className='d-flex align-items-center justify-content-center mt-4 mb-3'>
                        <input type='submit' value="Register" className='me-3 px-5 btn btn-dark' />
                    </div>
                    <span>Already have an account? <Link to={"/login"}>Click here</Link></span>
                </form>
            </div>
            </div>
    </div>
  )
}

export default SigninPage