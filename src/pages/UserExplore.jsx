import React, { useEffect } from "react";
import UserGeolocation from "./UserGeolocation";
import world from "../assets/world.png";
import Button from "../components/reusable/Button";

const UserExplore = () => {
  const location = UserGeolocation();
  const getLocationDetails = () => {};


  //fetching all the events 
  useEffect(()=>{
    const fetchUserEvents = async () => {
        const url = "http://localhost:8080/api/user/userEvents";
        const { data: res } = await axios.get(url, data);
        //data ko nwaran agreko ho res rakhera
        setData(res);
      };
      fetchUserEvents();
  },
[]);


  return (
    <div className="flex items-center gap-3 border m-6 rounded-2xl bg-pink-200 shadow-xl">
      <img src={world} alt="" className="w-[25vw] ml-[100px]" />
      <div className="border w-fit p-3 rounded-xl bg-white ">
        <p className="font-bold">Your location is:</p>
        <p>
          {location.loaded
            ? JSON.stringify(location.coordinates.lat)
            : "location data not available yet"}{" "}
          in Latitude
        </p>
        <p>
          {location.loaded
            ? JSON.stringify(location.coordinates.lng)
            : "location data not available yet"}{" "}
          in Longitude
        </p>
      </div>
    </div>
  );
};

export default UserExplore;
