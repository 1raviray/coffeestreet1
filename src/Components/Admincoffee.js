import axios from 'axios';
import React, { useState } from 'react'

const Admincoffee = () => {
  
  const [Title, setTitle] = useState("");
  const [File, setFile] = useState("");
  const [Select, setSelect] = useState("");
  const [Discription, setDiscription] = useState("");
  const [Ingredients, setIngredients] = useState("");
  const [Rating, setRating] = useState("");
  const [Cost, setCost] = useState("");

  const productform=(e)=>{
    e.preventDefault();
    axios.post("https://coffeestreet.onrender.com/coffee",{Title,File,Discription,Select,Rating,Cost,Ingredients})
    .then(()=>alert("successful"))
    .catch((err)=>console.log(err))
  }

  return (
    <div>
      <div className=" container my-5">
          <h3 className=' fw-bold text-center p-3' style={{backgroundColor:"#2F2105",color:'#F6EBDA'}}>Upload Products</h3>
        <div className=" px-5 py-3 mt-4 rounded" style={{backgroundColor:"#F6EBDA"}}>
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
            <textarea 
              rows='6'
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
              type="submit"
              className=" btn px-5 py-2"
              style={{backgroundColor:'#2F2105',color:'#F6EBDA'}}
              value="Add Product"
            />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Admincoffee