import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminNav = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-yellow-tone to-pink-tone p-4 flex justify-evenly w-full sticky top-0 z-[1000]">
        <Link to="/admin/home">
          <div className="flex flex-row gap-1">
            <span class="material-symbols-outlined">home</span>
            <p className="font-semibold">HOME</p>
          </div>
        </Link>
        <Link to="/admin/requests">
          <div className="flex flex-row gap-1">
            <span class="material-symbols-outlined">folded_hands</span>
            <p className="font-semibold">REQUESTS</p>
          </div>
        </Link>
        <Link to="">
          <div className="flex flex-row gap-1">
            <span class="material-symbols-outlined">manage_accounts</span>
            <p className="font-semibold">MANAGEMENT</p>
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

export default AdminNav;
