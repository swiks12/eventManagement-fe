import React from "react";
import adminHome from "../assets/homeOfAdmin.png";

const AdminHome = () => {
  return (
    <div className="h-[100vh]">
      <div className="text-4xl font-extrabold text-center mt-10">
        Welcome to Admin Dashboard
      </div>
      <img src={adminHome} alt="admin home" className="h-[100vh]  mt-[180px]" />
    </div>
  );
};

export default AdminHome;
