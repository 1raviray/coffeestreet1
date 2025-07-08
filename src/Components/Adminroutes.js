import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Adminerror from './Adminerror'
import Adminlogin from './Adminlogin'
import Admin from './Admin'
import Hidenav from './Hidenav'
import Header from './Header'
import Hero from '../Hero'
import OurProducts from './OurProducts'
import Aboutous from './Aboutous'
import SigninPage from './SigninPage'
import ProductDetails from '../ProductDetails'
import Blog from './Blog'
import BlogDetails from './BlogDetails'
import ContactUs from './ContactUs'
import Login from './Login'
import Myprofile from './Myprofile'

const Adminroutes = () => {
  return (
    <div>
      {/* <Router> */}
        <Hidenav>
          <Header/>
        </Hidenav>
        <Routes>
            <Route path='/' element={<Hero/>} />
            <Route path='/ourproducts' element={<OurProducts/>} />
            <Route path='/register' element={<SigninPage/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/aboutus' element={<Aboutous/>} />
            <Route path='/blog' element={<Blog/>} />
            <Route path='/blogdetails/:_id' element={<BlogDetails/>} />
            <Route path='/contactus' element={<ContactUs/>} />
            <Route path='/adminlogin' element={<Adminlogin/>} />
            <Route path='/myprofile' element={<Myprofile/>} />
            <Route path='/productDetails/:_id' element={<ProductDetails/>} />
            <Route path='/dashboardasewrgfvcwnudqehdqjxbqxqqetrtggtg' element={<Admin/>} />
            <Route path='*' element={<Adminerror/>} />
        </Routes>
      {/* </Router> */}
    </div>
  )
}

export default Adminroutes