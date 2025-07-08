import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Adminregisters = () => {
    const [registerdata,setregisterdata]=useState([]);

    const [_id,set_id]=useState("");
    const [username,setusername]=useState("");
    const [phoneNumber,setphoneNumber]=useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");

    useEffect(()=>{
        axios.get("https://coffeestreet.onrender.com/registers")
        .then((res)=>setregisterdata(res.data))
        .catch((err)=>alert(err))
    })

    const delaccount=(e,f)=>{
        return(
            axios.delete("https://coffeestreet.onrender.com/registers/"+e)
            .then(alert(f+" successfully deleted"))
            .catch((err)=>alert(err))
            )
    }

    const editaccount=(e)=>{
        return(
            axios.get("https://coffeestreet.onrender.com/registers/"+e)
            .then((res)=>{
                set_id(res.data._id);
                setusername(res.data.username);
                setphoneNumber(res.data.phoneNumber);
                setemail(res.data.email);
                setpassword(res.data.password)
            })
            .catch((err)=>alert(err))
        )
    }

    const editpopup=(e)=>{
        e.preventDefault()
        axios.put(`https://coffeestreet.onrender.com/registers/${_id}`,{_id,username,phoneNumber,password,email})
        .then(()=>alert("Details updated successfully"))
        .catch((err)=>console.log(err))
    }


  return (
    <div className=' container-flu_id'>
        <h4 className='fw-bold text-center my-4'>Accounts</h4>
        <table className=' w-100 table-bordered border-dark rounded'>
            <thead className='rounded'>
                <tr>
                    <th>Username</th>
                    <th>phone number</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {registerdata.map((e,index)=>{
                    return(
                        <tr key={index}>
                            <td>{e.username}</td>
                            <td>{e.phoneNumber}</td>
                            <td>{e.email}</td>
                            <td>{e.password}</td>
                            <td>
                                <button className='btn btn-primary me-3' onClick={()=>editaccount(e._id)} data-bs-target="#editpop" data-bs-toggle="modal" ><i className="bi bi-pencil-square"></i></button>
                                <button className='btn btn-danger' onClick={()=>delaccount(e._id,e.username)}><i className="bi bi-trash-fill"></i></button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        <div className='modal' id='editpop'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header justify-content-center'>
                        <h4 className='fw-bold'>Edit User</h4>
                    </div>
                    <div className='modal-body p-4'>
                        <form onSubmit={editpopup}>
                            <input type='text' className='my-3 form-control' value={username} onChange={(e)=>setusername(e.target.value)} placeholder='Username' />
                            <input type='tel' className='my-3 form-control' value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)} placeholder='Phone number' />
                            <input type='email' className='my-3 form-control' value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Email' />
                            <input type='password' className='my-3 form-control' value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Password' />
                            <div className=' text-center'>
                                <input type='submit' value="Update" className=' btn btn-danger' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Adminregisters