import React from "react";
import login from "../assets/login.png";
import Button from "../components/reusable/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const loginUser=(e)=>{
      e.preventDefault()
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
            <form onSubmit={loginUser} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email"
                name="emailLogin"
                className="bg-white rounded-2xl p-[9px] w-[250px]"
              />
              <input
                type="password"
                placeholder="Password"
                name="passlogin"
                className="bg-white rounded-2xl p-[9px] w-[250px]"
              />
              <Button data="Log In" />
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
