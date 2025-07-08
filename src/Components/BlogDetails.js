import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Footer from "../Footer";

const BlogDetails = () => {
  const [oneBlog, setoneBlog] = useState("");
  const [Blog, setBlog] = useState([]);

  const { _id } = useParams();
  useEffect(() => {
    axios
      .get(`https://coffeestreet.onrender.com/Blog/${_id}`)
      .then((res) => setoneBlog(res.data))
      .catch((err) => console.log(err));
    axios
      .get("https://coffeestreet.onrender.com/Blog")
      .then((e) => setBlog(e.data))
      .catch((e) => console.log(e));
  },[]);
  console.log(oneBlog);
  return (
    <div>
      <p className="para-deco"></p>
      <div className=" container-fluid my-5 bg6 d-flex">
        <h1 className=" text-center font-anton m-auto">Blog Details</h1>
      </div>
      <div className=" container">
        <div className=" row">
          <div className=" col-12 col-lg-9 p-3 pt-0">
            <div className=" font-roboto">
              <img src={oneBlog.Image} className=" w-100 rounded" />
              <div className=" d-flex justify-content-between">
                <span>{oneBlog.DateandTime}</span>
                <span>{oneBlog.WriterName}</span>
              </div>
              <div className=" d-flex">
                <h2 className=" fw-bold underline-color pb-2 my-3">{oneBlog.Title}</h2>
                <div className=" ms-auto align-items-center d-flex fs-5">
                  <i class="bi bi-share me-3"></i>
                  <i class="bi bi-instagram me-3"></i>
                  <i class="bi bi-facebook me-3"></i>
                  <i class="bi bi-twitter me-3"></i>
                </div>
              </div>
              <p className=" indent">{oneBlog.Content}</p>
              <div>
                <h4 className=" fw-bold ">Comments:</h4>
                <form>
                  <textarea
                    cols="15"
                    rows="6"
                    className=" form-control "
                    placeholder="Type your comments"
                  ></textarea>
                </form>
              </div>
            </div>
          </div>
          <div className=" col-12 col-lg-3">
            <h2 className=" fw-bold mb-3 text-center">Recent Blogs</h2>
            {Blog.slice(0, 3).map((e) => {
              return (
                <div className=" shadow rounded p-1 mb-4">
                  <img src={e.Image} className=" w-100" />
                  <div className=" p-3 bg-warning-subtle">
                    <h6 className=" fw-bold font-roboto mt-2">{e.Title}</h6>
                    <p
                      className="content m-0 text-dark-emphasis"
                      style={{ fontSize: "12px" }}
                    >
                      {e.Content}
                    </p>
                    <div
                      className=" d-flex justify-content-between my-2 text-dark-emphasis"
                      style={{ fontSize: "12px" }}
                    >
                      <span className=" font-roboto ">{e.DateandTime}</span>
                      <span className="">{e.WriterName}</span>
                    </div>
                    <NavLink to={`/blogdetails/${e._id}`}>
                      <button className=" btns1" style={{ fontSize: "13px" }}>
                        Read more
                      </button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
