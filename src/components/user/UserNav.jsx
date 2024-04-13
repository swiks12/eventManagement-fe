import React from "react";
import { Link, Outlet } from "react-router-dom";

const UserNav = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-yellow-tone to-pink-tone p-4 flex justify-evenly w-full sticky top-0 z-[1000]">
        <Link to="/user/home">
          <p className="font-semibold">HOME</p>
        </Link>
        <Link to="">
          <p className="font-semibold">EVENTS</p>
        </Link>
        <Link to="">
          <p className="font-semibold">EXPLORE</p>
        </Link>
        <Link to="">
          <p className="font-semibold">LOG OUT</p>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default UserNav;
