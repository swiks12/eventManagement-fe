import React from "react";
import signup from "../assets/signup1.png";
import Button from "../components/reusable/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role:''
  });

  const [error,setError]=useState("");
  const navigate=useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const url="http://localhost:8080/api/signup";
      const {data:res}=await axios.post(url,data);
      navigate("/login")
      console.log(res.message);
    } catch (error) {
      if(error.response && error.response.status>=400 && error.response.status<=500){
        setError(error.response.data.message)
      }
    
    }

  }

  return (
    <div className="bg-gradient-to-r from-yellow-tone to-pink-tone p-4 h-[100vh] flex items-center justify-center">
      <div className="flex items-center space-x-[100px] bg-white  w-[70vw] m-8 rounded-3xl bg-opacity-50 justify-center">
        <div className>
          <p className="font-bold text-3xl mt-[20px] text-center">Sign Up</p>

          <img src={signup} alt="sign up" className="h-[70vh]" />
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              className="bg-white rounded-2xl p-[9px] w-[250px]"
              value={data.name}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              className="bg-white rounded-2xl p-[9px] w-[250px]"
              value={data.email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              className="bg-white rounded-2xl p-[9px] w-[250px]"
              value={data.password}
              required
            />
            <div>
              <p>Define your role:</p>
              <div className="flex row gap-4">
                <input type="radio" name="role" value="user" onChange={handleChange} checked={data.role==="user"}/>
                User
                <input type="radio" name="role" value="organizer" onChange={handleChange} checked={data.role==="organizer"}/>
                Organizer
              </div>
            </div>
            {error && <div className="text-red-600">
              {error}</div>}
            <Button data="Sign Up" type="submit"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
