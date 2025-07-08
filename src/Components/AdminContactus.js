import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminContactus = () => {
  const [Querydata, SetQuerydata] = useState([]);
  useEffect(() => {
    axios
      .get("https://coffeestreet.onrender.com/contactUs")
      .then((res) => SetQuerydata(res.data))
      .catch((err) => console.log(err));
  });

  const solved=(e)=>{
    axios.delete("https://coffeestreet.onrender.com/contactUs/"+e)
    .then("Resolved successfully")
    .catch((e)=>console.log(e))
  }

  return (
    <div>
      <div className=" container">
        <h2 className=" my-3">Contact us Data</h2>
        <table className=" table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone number</th>
              <th>Email</th>
              <th>Query</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Querydata.map((e,index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{e.Name}</td>
                    <td>{e.Phonenumber}</td>
                    <td>{e.Email}</td>
                    <td>{e.Message}</td>
                    <td>
                      <a href="https://mail.google.com/mail/u/0/#inbox">
                        <button className=" btn btn-warning me-3  ">
                          <i class="bi bi-reply-all-fill"></i>
                        </button>
                      </a>
                      <button
                              onClick={() => solved(e._id)}
                        // data-bs-target="#check"
                        // data-bs-toggle="modal"
                        className=" btn btn-success"
                      >
                        <i class="bi bi-check-circle-fill"></i>
                      </button>
                    </td>
                  </tr>
                  <div className="modal" id="check">
                    <div className=" modal-dialog">
                      <div className=" modal-content">
                        <div className=" modal-body p-3">
                          <h3 className=" text-center fw-bold mb-4">
                            Is query solved?
                          </h3>
                          <div className=" d-flex justify-content-center my-3">
                            <button
                              data-bs-dismiss="modal"
                              className=" btn btn-success px-5 me-5"
                            >
                              Yes
                            </button>
                            <button
                              data-bs-dismiss="modal"
                              className=" btn btn-danger px-5"
                            >
                              No
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminContactus;
