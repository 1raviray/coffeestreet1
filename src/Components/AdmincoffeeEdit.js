import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const AdmincoffeeEdit = () => {
    const [products,setproducts]=useState([]);

    const [_id, setid] = useState("");
    const [Title, setTitle] = useState("");
    const [File, setFile] = useState("");
    const [Select, setSelect] = useState("");
    const [Discription, setDiscription] = useState("");
    const [Ingredients, setIngredients] = useState("");
    const [Rating, setRating] = useState("");
    const [Cost, setCost] = useState(" ");

    useEffect(()=>{
        axios.get("https://coffeestreet.onrender.com/coffee")
        .then((res)=>setproducts(res.data))
        .catch((err)=>console.log(err))
    })


    const deletebtn=(e)=>{
      return(
        axios.delete("https://coffeestreet.onrender.com/coffee/"+e)
        .then(alert("Product Deleted"))
        .catch((e)=>console.log(e))
      )
    }

    const editbtn=(e)=>{
      return(
        axios.get("https://coffeestreet.onrender.com/coffee/"+e)
        .then((r)=>{
          setid(r.data._id);
          setFile(r.data.File);
          setRating(r.data.Rating);
          setCost(r.data.Cost);
          setDiscription(r.data.Discription);
          setIngredients(r.data.Ingredients);
          setSelect(r.data.Select);
          setTitle(r.data.Title);
        })
      )
    }

    const productform=(e)=>{
      e.preventDefault();
      axios.put(`https://coffeestreet.onrender.com/coffee/${_id}`,{Title,File,Discription,Select,Rating,Cost,Ingredients})
      .then(()=>alert("successful"))
      .catch((err)=>console.log(err))
    }

  return (
    <div className=' my-5'>
        <h2 className=' fw-bold text-center py-3' style={{backgroundColor:"#2F2105",color:'#F6EBDA'}}>Edit Products</h2>
        <div className=' row'>
        {
            products.map((e)=>{
                return(
                <div className=" col-12 col-lg-3 my-4 " key={e._id}>
                  <div className=" card position-relative p-4 rounded-4 shadow editcard" style={{border:"solid 5px rgba(0, 0, 0,0.1)"}} >
                  <img
                    className=" rounded-4 font-roboto"
                    src={e.File}
                    alt="Title"
                  />

                  <div className="rating">
                    <span className=" fw-bold m-0 font-roboto">{e.Rating} <i className="bi bi-star-fill text-warning ms-1"></i></span>
                  </div>
                  <div className="card-body pb-0">
                    <div className="  justify-content-between align-items-center mb-3">
                      <h5 className="card-title font-roboto m-0">{e.Title}</h5>
                      {/* <p className="card-text font-roboto m-0" style={{color:"#00000050"}}>{e.Select}</p> */}
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                    <NavLink className="text-decoration-none" to={`/productDetails/${e._id}`}>
                      <button className="button  rounded-5 border-warning font-roboto">Buy now</button>
                    </NavLink>
                      <h4 className="font-roboto m-0">₹ {e.Cost}</h4>
                    </div>
                  </div>
                  <div className=' d-flex'>
                    <button onClick={()=>editbtn(e._id)} data-bs-toggle='modal' data-bs-target='#modal' className=' editbtn'><i class="bi bi-pencil-fill d-block"></i></button>      
                    <button onClick={()=>deletebtn(e._id)} className=' editbtn'><i class="bi bi-trash-fill d-block"></i></button>      
                  </div>
          </div>
        </div>
              )
            })
        }
        </div>
        <div className=' modal' id='modal'>
            <div className=' modal-dialog'>
              <div className=' modal-content'>
                <div className=' modal-header justify-content-center'>
                    <h2 className='fw-bold m-0'>Edit Details</h2>
                </div>
                <div className='modal-body p-5 pt-2'>
                <form onSubmit={productform}>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={Title}
              placeholder="Title"
              className=" form-control my-3"
            />
            <input
              type="text"
              onChange={(e) => setFile(e.target.value)}
              value={File}
              placeholder="Copy Image Url"
              className=" form-control my-3"
            />
            <select onChange={(e)=>setSelect(e.target.value)} className=" form-control">
              <option>Select catogery</option>
              <option value={"Coffee"}>Coffee</option>
              <option value={"Sandwich"}>Sandwich</option>
              <option value={"Waffles"}>Waffles</option>
            </select>
            <input
              type="text"
              onChange={(e) => setDiscription(e.target.value)}
              value={Discription}
              placeholder="Discription"
              className=" form-control my-3"
            />
            <input
              type="text"
              onChange={(e) => setIngredients(e.target.value)}
              value={Ingredients}
              placeholder="Ingredients"
              className=" form-control my-3"
            />
            <input
              type="text"
              onChange={(e) => setRating(e.target.value)}
              value={Rating}
              placeholder="Rating"
              className=" form-control my-3"
            />
            <input
              type="text"
              onChange={(e) => setCost(e.target.value)}
              value={Cost}
              placeholder="Cost"
              className=" form-control my-3"
            />
            <div className=' text-center'>
            <input
              data-bs-dismiss="modal"
              type="submit"
              className=" btn btn-primary"
              value="Edit Product"
            />
            </div>
          </form>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AdmincoffeeEdit