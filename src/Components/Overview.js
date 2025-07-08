import axios from "axios";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import Adminregisters from "./Adminregisters";
import AdminBlogUpload from "./AdminBlogUpload";
import UserChart from "./UserChart";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Overview = () => {
  const [User, setUser] = useState([]);
  const [Product, setProduct] = useState([]);
  const [query, setquery] = useState([]);
  const [Blog, setBlog] = useState([]);
  const date = new Date();
  const dt = date.toDateString();
  // console.log(date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear());
  useEffect(() => {
    axios
      .get("https://coffeestreet.onrender.com/registers")
      .then((res) => setUser(res.data))
      .catch((e) => console.log(e));
    axios
      .get("https://coffeestreet.onrender.com/coffee")
      .then((res) => setProduct(res.data))
      .catch((e) => console.log(e));
    axios
      .get("https://coffeestreet.onrender.com/contactUs")
      .then((res) => setquery(res.data))
      .catch((e) => console.log(e));
    axios
      .get("https://coffeestreet.onrender.com/Blog")
      .then((res) => setBlog(res.data))
      .catch((e) => console.log(e));
  });
  const data = [
    {
      name: "Feb",
      uv: 4000,
      users: 12,
      amt: 2400,
    },
    {
      name: "Mar",
      uv: 3000,
      users: 17,
      amt: 2210,
    },
    {
      name: "Apr",
      uv: 2000,
      users: 15,
      amt: 2290,
    },
    {
      name: "May",
      uv: 2780,
      users: 28,
      amt: 2000,
    },
    {
      name: "Jun",
      uv: 1890,
      users: 14,
      amt: 2181,
    },
    {
      name: "Jul",
      uv: 2390,
      users: 38,
      amt: 2500,
    },
  ];
  return (
    <>
      <div className=" container-fluid gx-0">
        <div className=" bg-white px-5 py-2 my-2">
          <h3 className=" fw-bold m-0 mb-1">Welcome to Dashboard</h3>
          <span>Monitor your progress to increase your sales.</span>
        </div>
        <div className=" bg-white p-2 ">
          <div className=" row gx-0 px-2">
            <div className=" col-3 p-1">
              <div className=" coffee-color p-3 rounded shadow">
                <div className=" d-flex">
                  <h5>
                    <i class=" fs-5 me-2 bi bi-people-fill"></i>Number of users
                  </h5>
                </div>
                <h1 className=" fw-bold p-3">
                  <CountUp end={User.length} />
                </h1>
                <span className=" text-center border-top d-block py-2">
                  Update {dt}
                </span>
              </div>
            </div>
            <div className=" col-3 p-1">
              <div className=" coffee-color p-3 rounded shadow">
                <div className=" d-flex">
                  <h5>
                    <i class=" fs-5 me-2 bi bi-box2-fill"></i>Number of Products
                  </h5>
                </div>
                <h1 className=" fw-bold p-3">
                  <CountUp end={Product.length} />
                </h1>
                <span className=" text-center border-top d-block py-2">
                  Update {dt}
                </span>
              </div>
            </div>
            <div className=" col-3 p-1">
              <div className=" coffee-color p-3 rounded shadow">
                <div className=" d-flex">
                  <h5>
                    <i class=" fs-5 me-2 bi bi-question-square-fill"></i>Queries
                  </h5>
                </div>
                <h1 className=" fw-bold p-3">
                  <CountUp end={query.length} />
                </h1>
                <span className=" text-center border-top d-block py-2">
                  Update {dt}
                </span>
              </div>
            </div>
            <div className=" col-3 p-1">
              <div className=" coffee-color p-3 rounded shadow">
                <div className=" d-flex">
                  <h5>
                    <i class=" fs-5 me-2 bi bi-journal-bookmark-fill"></i>Blogs
                  </h5>
                </div>
                <h1 className=" fw-bold p-3">
                  <CountUp end={Blog.length} />
                </h1>
                <span className=" text-center border-top d-block py-2">
                  Update {dt}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className=" row gx-0 bg-white my-5">
          <div className=" col-8">
          <div className="bg-white p-2  my-5" style={{height:'50vh'}}>
        <h5 className=" fw-bold text-center my-3">Number of users per month</h5>
          <ResponsiveContainer >
            <AreaChart
              // width={500}
              // height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="users"
                stroke="#2F2105"
                fill="#2F210598"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
          </div>
          <div className=" col-4">
        <div className="bg-white p-2  my-5">
          <UserChart/>
        </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Overview;
