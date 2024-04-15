import React from "react";
import { Link, Outlet } from "react-router-dom";

const NavbarComp = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-yellow-tone to-pink-tone p-4 flex justify-evenly w-full sticky top-0 z-[1000]">
        <Link to="/organizer/home">
          <div className="flex flex-row gap-1">
            <span class="material-symbols-outlined">home</span>
            <p className="font-semibold">HOME</p>
          </div>
        </Link>
        <Link to="/organizer/events">
          <div className="flex flex-row gap-1">
            <span class="material-symbols-outlined">event</span>
            <p className="font-semibold">EVENTS</p>
          </div>
        </Link>
        <Link to="/organizer/payment">
          <div className="flex flex-row gap-1">
          <span class="material-symbols-outlined">paid</span>
          <p className="font-semibold">PAYMENT</p>
          </div>
        </Link>
        <Link to="/login">
          <div className="flex flex-row gap-1">
            <span class="material-symbols-outlined">logout</span>
            <p className="font-semibold">LOG OUT</p>
          </div>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default NavbarComp;
