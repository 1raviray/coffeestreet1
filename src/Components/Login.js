import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logintoken } from '../App'

const Login = () => {

    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
    const [emailError,setemailError]=useState("")
    const [passwordError,setpasswordError]=useState("")
    const [Token,setToken]=useContext(logintoken)
    const navigate=useNavigate()
    let emailstat = false;
    let passwordstat = false;

    const loginSubmit=(e)=>{
        e.preventDefault()
        if(email===""){
            setemailError("email is required")
        }else if(email.match(/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/)){
            setemailError("")
            emailstat=true
        }else{
            setemailError("email is in wrong format")
        }
        if(emailstat){
            axios.post("https://coffeestreet.onrender.com/registers/login",{email,password})
            .then((res)=>{
                if(res.data.token){
                    setToken(res.data.token)
                }else if(res.data.status===false && res.data.message==="Invalid Password"){
                    alert("Invalid Password")
                }else{
                    alert("User not found")
                }
            })
            .catch((err)=>console.log(err))
        }
    }
    // console.log(Token);
    if(Token){
        navigate("/myprofile")
    }

  return (
    <div>
        <div className=' p-5 bg7'>
            <div className='col-4  d-flex flex-column m-auto mt-5 signin p-5 pb-3 border border-warning border-5'>
                <h4 className="fw-bold text-center mb-4">Sign in</h4>
                <form onSubmit={loginSubmit} action='<Hero/>'>
                    
                    <input type='email' name='email' value={email} onChange={(e)=>setemail(e.target.value)}  placeholder='Email' className='mb-3 form-control' />
                    <p className=' text-danger'>{emailError}</p>
                    
                    <input type='password' name='password' value={password} onChange={(e)=>setpassword(e.target.value)}  placeholder='Password' className='mb-3 form-control' />
                    
                    <p className=' text-danger'>{passwordError}</p>
                    <div className='d-flex align-items-center justify-content-center mt-4 mb-3'>
                        <input type='submit' value="Login" className='me-3 px-5 btn btn-dark' />
                    </div>
                    <span>Don't have an account? <Link to={"/register"}>Click here</Link></span>
                </form>
            </div>
            </div>
    </div>
  )
}

export default Login