import React, { useState } from 'react'
import Admincoffee from './Admincoffee';
import AdmincoffeeEdit from './AdmincoffeeEdit';

const AdminCoffeeall = () => {
    const [view,setview]=useState('uploadproduct');
    const [btnclass,setbtnclass]=useState('btncolor');
    const [btnclass1,setbtnclass1]=useState('btncolor0');
    
    const viewclicked=()=>{
        if(view==="uploadproduct"){
            return <Admincoffee/>
        }else if(view==="editproduct"){
            return <AdmincoffeeEdit/>
        }
    }

        const changecolor=()=>{
            setbtnclass('btncolor')
            setbtnclass1('btncolor0')
        }
        const changecolor1=()=>{
            setbtnclass('btncolor0')
            setbtnclass1('btncolor')
        }

  return (
    <div>
        <div className=' container '>
            <div className=' row'>
                <div onClick={()=>changecolor()} className={btnclass}>
                    <button onClick={()=>setview('uploadproduct')} className=' btn w-100 m-0 p-3'>Upload Products</button>
                </div>
                <div onClick={()=>changecolor1()} className={btnclass1}>
                    <button onClick={()=>setview('editproduct')} className=' btn w-100 m-0 p-3'>Edit Products</button>
                </div>
            </div>
            <div>
            </div>
                {viewclicked()}
        </div>
    </div>
  )
}

export default AdminCoffeeall