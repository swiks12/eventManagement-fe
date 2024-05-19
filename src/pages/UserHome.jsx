import React from "react";
import userHome from "../assets/userHome.png";

const UserHome = () => {
  const userdata = JSON.parse(localStorage.getItem("user-data"));
  const username = userdata.name;
  return (
    <div className=" bg-yellow-100 ">
      <div className="flex items-center  p-10 gap-[100px]">
        <p className="text-4xl font-extrabold ml-[70px] text-center">
          Welcome to User Dashboard {username}
        </p>
        <img src={userHome} className="h-[80vh]" />
      </div>
    </div>
  );
};

export default UserHome;
