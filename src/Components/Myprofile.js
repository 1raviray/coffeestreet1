import React, { useContext, useEffect } from 'react'
import { logindataContext, logintoken } from '../App'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Myprofile = () => {

  const [Token,setToken]=useContext(logintoken)
  const [Logindata,SetLogindata]=useContext(logindataContext)
  const navigate=useNavigate()

  useEffect(()=>{
    axios.get("https://coffeestreet.onrender.com/registers/myprofile",{headers:{"x-token":Token}})
    .then((res)=>SetLogindata(res.data))
    .catch(err=>console.log(err))
  },[Token])

  if(!Token){
    navigate("/register")
  }

  return (
    <div>
      <p className=' para-deco'></p>
    <div className=' my-5 py-5'>Myprofile  -  {Logindata.username}
    <button className=' btn btn-danger' onClick={()=>setToken("")}>logout</button></div>
    </div>
  )
}

export default Myprofile