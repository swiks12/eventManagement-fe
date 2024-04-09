import React, { useState } from "react";
import login from "../assets/login.png";
import Button from "../components/reusable/Button";
import { Link } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const [data,setData]=useState({
    email:"",
    password:""
  })
  const [error,setError]=useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    //ttyai vayera name ra mathi use state ko identification same hunu parcha
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const url="http://localhost:8080/api/login";
      console.log(url);
      const {data:res}=await axios.post(url,data);
      console.log(data);
      localStorage.setItem("token",res.data);
      window.location="/"
      console.log(res.message);
      console.log("logged in");
    } catch (error) {
      if(error.response && error.response.status>=400 && error.response.status<=500){
        setError(error.response.data.message)
      }
    
    }

  }
  return (
    <>
      <div className="bg-gradient-to-r from-yellow-tone to-pink-tone p-4 h-[100vh] flex justify-center items-center">
        <div className="flex items-center space-x-[100px] bg-white w-[70vw] m-8 rounded-3xl bg-opacity-50">
          <div>
            <img src={login} alt="Girl waving" className="h-[70vh] mt-8" />
          </div>
          <div>
            <div>
              <p className="font-bold text-3xl mb-3 text-center">Log In</p>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
                className="bg-white rounded-2xl p-[9px] w-[250px]"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={data.password}
                className="bg-white rounded-2xl p-[9px] w-[250px]"
              />
              <Button data="Log In" type="submit"/>
              <p className="font-medium">
                Don't Have an account?
                <Link to='/signup' className="font-bold">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
