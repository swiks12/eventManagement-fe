import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavbarComp = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-yellow-tone to-pink-tone p-4 flex justify-evenly w-full sticky top-0 z-[1000]">
        <Link to="/organizer/home">
          <p className="font-semibold">HOME</p>
        </Link>
        <Link to="/organizer/events">
          <p className="font-semibold">EVENTS</p>
        </Link>
        <Link to="/organizer/payment">
          <p className="font-semibold">PAYMENT</p>
        </Link>
        <Link to="/login">
          <p className="font-semibold">LOG OUT</p>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default NavbarComp;
