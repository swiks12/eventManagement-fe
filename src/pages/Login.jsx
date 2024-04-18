import React, { useState } from "react";
import login from "../assets/login.png";
import Button from "../components/reusable/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer ,toast} from "react-toastify";


const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    //ttyai vayera name ra mathi use state ko identification same hunu parcha
  };

  const verifyToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("Token not found in localStorage");
      return;
    }

    try {
      const verifyUrl = "http://localhost:8080/api/tokenVerify";
      const response = await axios.get(verifyUrl, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data, "response");
      if (response.data.user.role == "organizer") {
        navigate("/organizer/home");
      }
      console.log("Token verified successfully");
    } catch (error) {
      console.error("Error verifying token:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/login";
      console.log(url);
      const { data: res } = await axios.post(url, data);
      console.log(data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user-data", JSON.stringify(res.data.user));
      console.log(res.data.user, "response.data.user");
      if (res.data.user.role === "organizer") {
        navigate("/organizer/home");
      }
      else if(res.data.user.role==="admin"){
        navigate("/admin/home");
      }
      else {
        navigate("/user/home");
      }
      // await verifyToken();
      // window.location = "/";
      console.log(res.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      //error bata j response aako cha tyasko data vaihalcha tyasko chai dekhaune ho hamro yo message
    }
  };

  return (
    <>
    <ToastContainer/>
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
              <Button data="Log In" type="submit" />
              <p className="font-medium">
                Don't Have an account?
                <Link to="/signup" className="font-bold">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
