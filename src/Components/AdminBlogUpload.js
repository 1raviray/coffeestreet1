import axios from 'axios';
import React, {  useState } from 'react'

const AdminBlogUpload = () => {
    const [Title,setTitle]=useState();
    const [Image,setImage]=useState();
    const [DateandTime,setDateandTime]=useState();
    const [WriterName,setWriterName]=useState("- ");
    const [Content,setContent]=useState();
        const BlogUpload=(e)=>{
            e.preventDefault()
            axios.post('https://coffeestreet.onrender.com/Blog',{Title,Image,DateandTime,WriterName,Content})
            .then(()=>alert("success"))
            .catch((err)=>alert(err))
    }

  return (
    <div className=' container'>
      <div className=' col-8 m-auto bg-warning-subtle shadow rounded-3 p-4 my-5 '>
      <h3 className=' fw-bold text-center text-dark'>Write a Blog</h3>
        <form onSubmit={BlogUpload}>
            <input type='text' className=' form-control my-3' value={Title} onChange={(e)=>setTitle(e.target.value)} placeholder=' Blog title' />
            <input type='text' className=' form-control my-3' value={Image} onChange={(e)=>setImage(e.target.value)} placeholder=' Blog image' />
            <input type="date" className=' form-control my-3' value={DateandTime} onChange={(e)=>setDateandTime(e.target.value)} placeholder=' Date and time' />
            <input type='text' className=' form-control my-3' value={WriterName} onChange={(e)=>setWriterName(e.target.value)} placeholder=' Writer name' />
            <textarea className=' form-control my-3' cols='100' rows="10" value={Content} onChange={(e)=>setContent(e.target.value)} placeholder=' content'></textarea>
            <div className=' text-center'>
            <input type='submit' value='Post' className=' w-100 btn btn-warning' />
            </div>
        </form>
      </div>
    </div>
  )
}

export default AdminBlogUpload