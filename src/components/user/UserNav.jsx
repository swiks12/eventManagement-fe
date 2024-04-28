import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const UserNav = () => {
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("user-data");
    navigate("/login");
  }
  return (
    <>
      <div className="bg-gradient-to-r from-yellow-tone to-pink-tone p-4 flex justify-evenly w-full sticky top-0 z-[1000]">
        <Link to="/user/home">
          <div className="flex flex-row gap-1">
            <span class="material-symbols-outlined">home</span>
            <p className="font-semibold">HOME</p>
          </div>
        </Link>
        <Link to="/user/events">
          <div className="flex flex-row gap-1">
            <span class="material-symbols-outlined">event</span>
            <p className="font-semibold">EVENTS</p>
          </div>
        </Link>
        <Link to="/user/explore">
          <div className="flex flex-row gap-1">
            <span class="material-symbols-outlined">search</span>
            <p className="font-semibold">EXPLORE</p>
          </div>
        </Link>
          <div className="flex flex-row gap-1" onClick={logout}>
            <span class="material-symbols-outlined">logout</span>
            <p className="font-semibold">LOG OUT</p>
          </div>
      </div>
      <Outlet />
    </>
  );
};

export default UserNav;
