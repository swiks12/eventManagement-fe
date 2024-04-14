import React, { useEffect, useState } from "react";
import CreateEventForm from "./CreateEventForm";
import { Link } from "react-router-dom";
import axios from "axios";
import {toast,ToastContainer} from "react-toastify";


const OrganizerEvents = () => {
  const [data,setData]=useState([]);
  const user = JSON.parse(localStorage.getItem('user-data'))
  //use eefet used to  re render component
  useEffect(()=>{
    const fetchEvents=async()=>{
      const  url=`http://localhost:8080/api/events/getEvents/${user._id}`;
      const {data:res}=await axios.get(url,data);
      setData(res);
    }
    fetchEvents();
  },[])


  const handleDelete=async(id)=>{
    const url=`http://localhost:8080/api/events/delete/${id}`;
    const {data:res}=await axios.delete(url);
    console.log(res);
    toast.success("Deletion Succesfull!")
  }
  return (
    <>
    <ToastContainer />
    <p className="text-3xl font-extrabold  mt-4 text-center">Lets see your events here!</p>
      <div className="p-6 flex justify-evenly flex-wrap">
          {/* //map vaneko js ho so use in curly */}
          {data.map((item,i)=>
          (
            <div key={i} className="p-4 border rounded-2xl shadow-2xl">
              <img src={item.image.url} alt="banner" className="w-[40vw] rounded-xl " />
              <div>
              <div>
                <p className="text-xl font-bold">Name :{item.name}</p>
                <p>Status: {item.statusVal}</p>
              </div>
              <div className="flex flex-row gap-3 mt-2">
                <button className="bg-blue-500  pl-3 pr-3 rounded-2xl place-self-end font-medium" onClick={() => handleDelete(item._id)}>update</button>
                <button className="bg-red-500  pl-3 pr-3 rounded-2xl place-self-end font-medium" onClick={() => handleDelete(item._id)}>delete</button>
              </div>
              </div>
            </div>
          ))}
        <Link to="/organizer/events/create">
        <button className="p-5 pl-6 pr-6 bg-black text-white rounded-2xl fixed bottom-8 left-[90%] font-bold">
          +
        </button>
        </Link>
      </div>
    </>
  );
};

export default OrganizerEvents;
