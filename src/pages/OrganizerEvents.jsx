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
      <div >
        
          {/* //map vaneko js ho so use in curly */}
          {data.map((item,i)=>
          (
            <div key={i}>
              <img src={item.image.url} alt="" />
              <p>{item.name}</p>
              <p>{item.statusVal}</p>
              <button className="bg-red-500 p-4" onClick={() => handleDelete(item._id)}>delete</button>
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
