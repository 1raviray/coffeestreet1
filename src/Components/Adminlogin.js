import { getQueriesForElement } from '@testing-library/react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Adminlogin = () => {

    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [error,seterror]=useState("");
    const navigate=useNavigate()
    
    const adminlogin=(e)=>{
        e.preventDefault()
        if(username==="Admin" && password==="Admin@123"){
            navigate("/dashboardasewrgfvcwnudqehdqjxbqxqqetrtggtg");
            seterror("")
        }else(
            seterror("Invalid credentials")
        )
    }

  return (

    <div className=' container translate-y'>
        <div className='col-12 col-lg-4 m-auto my-5 p-5 rounded-4 bg-dark-subtle'>
            <h3 className='fw-bold text-center'>Admin login</h3>
            <form className='mt-4' onSubmit={adminlogin}>
                <div className='form-floating my-3'>
                    <input type='text' className=' form-control' value={username} onChange={(e)=>setusername(e.target.value)} placeholder=''/>
                    <label>Username</label>
                </div>
                <div className='form-floating my-3'>
                    <input type='password' className=' form-control' value={password} onChange={(e)=>setpassword(e.target.value)} placeholder=''/>
                    <label>Password</label>
                    <p className='mt-3 text-danger fw-semibold'>{error}</p>
                </div>
                <div className=' text-center'>
                    <input type='submit' value="Login" className=' btn btn-warning px-4' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Adminlogin