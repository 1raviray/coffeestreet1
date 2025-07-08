import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Hidenav = ({children}) => {
    const locate=useLocation();
    const [hidenav,sethidenav]=useState(false)

    useEffect(() => {
      console.log("this is location", locate);
      if(locate.pathname==="/adminlogin" || locate.pathname==="/dashboardasewrgfvcwnudqehdqjxbqxqqetrtggtg"){
        sethidenav(false)
      }else(
        sethidenav(true)
      )
    })
    
  return (
    <div>
        {hidenav && children}
    </div>
  )
}

export default Hidenav