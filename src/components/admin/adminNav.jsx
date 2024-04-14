import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminNav = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-yellow-tone to-pink-tone p-4 flex justify-evenly w-full sticky top-0 z-[1000]">
        <Link to="/admin/home">
          <p className="font-semibold">HOME</p>
        </Link>
        <Link to="/admin/requests">
          <p className="font-semibold">REQUESTS</p>
        </Link>
        <Link to="">
          <p className="font-semibold">MANAGEMENT</p>
        </Link>
        <Link to="">
          <p className="font-semibold">LOG OUT</p>
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default AdminNav;
