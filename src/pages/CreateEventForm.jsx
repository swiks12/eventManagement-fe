import React, { useState } from "react";
import Button from "../components/reusable/Button";
import people from "../assets/people.png";
import creation from "../assets/creation.png";
import MapComponent from "../components/map/MapComponent";
import axios from "axios";
import {toast,ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const CreateEventForm = () => {
  const [locationDetails, setLocationDetails] = useState("");
  const [data, setData] = useState({
    eventName: "",
    eventDate: "",
    address:"",
    time: "",
    price: "",
    description: "",
    coordinates: "",
    image:"",
    organizerId: JSON.parse(localStorage.getItem('user-data'))._id
    //object ma convert garna parse garne ani balla . gari use hanna milcha
  });


  console.log(data, 'eventData')


  const navigate=useNavigate();

  //this part pheri bujhau vanne babu lai ali confuse vaye yati thacha malai calue change vairakheko value ma basxa thyo use state le name ma kam garne vayekole name ma rakheko

  const handleChange=({currentTarget:input})=>{
    setData({...data,[input.name]:input.value});
  }

  const handleImage=(e)=>{
    if(!e.target.value){
      return;
    }
    //getting the image 
    const file=e.target.files[0];
    //calling another function with sending file as parameter
    previewFile(file);
    console.log(file); 
   };

   const previewFile=(file)=>{
      const reader=new FileReader();
      reader.readAsDataURL(file);
      reader.onload=()=>{
        setData((prevData) => ({
          ...prevData,
          image: reader.result, // Update the image field with the data URL
        }));
      }
   }

   

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const url="http://localhost:8080/api/events/add";
      const {data:res}=await axios.post(url,data);
      console.log(res);
      toast.success("Event Created succesfully!")
      navigate("/organizer/events");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <ToastContainer />
      <div className="flex flex-col justify-center m-5 gap-7">
        <div>
          <p className="font-extrabold text-4xl text-center">
            Create your events now!!
          </p>
        </div>
        <div className="flex justify-center p-8 items-center rounded-2xl bg-opacity-100">
          {/* <img src={people} alt="" className=" h-[83vh]" /> */}
          <form className="flex flex-col gap-4 w-[80vw] " onSubmit={handleSubmit}>
            <input
              type="text"
              name="eventName"
              placeholder="Name of the event"
              required
              value={data.eventName}
              onChange={handleChange}
              className="bg-white rounded-2xl p-[9px] border"
            />
            <p>Browse Event Location</p>
            <MapComponent
              locationDetails={locationDetails}
              //prev ma mathi ko sab aaucha use sate ma vako
              setLocationDetails={(locationDetails => setData(prev => ({...prev, address: locationDetails.address.details.name, coordinates: [locationDetails.place.lon, locationDetails.place.lat]})))}
            />
            <p>{locationDetails && locationDetails.address.details.name}</p>
            <p>Enter Event Day</p>
            <input
              type="date"
              name="eventDate"
              placeholder="Enter event Date"
              required
              onChange={handleChange}
              value={data.eventDate}
              className="bg-white rounded-2xl p-[9px] border"
            />
            <input
              type="text"
              name="time"
              placeholder="Enter time of the event"
              value={data.time}
              onChange={handleChange}
              className="bg-white rounded-2xl p-[9px] border"
              required
            />
            <input
              type="text"
              name="price"
              placeholder="Insert ticket price"
              required
              value={data.price}
              onChange={handleChange}
              className="bg-white rounded-2xl p-[9px] border"
            />
            <textarea
              type="text"
              name="description"
              placeholder="Enter event description"
              required
              onChange={handleChange}
              value={data.description}
              className="bg-white rounded-2xl p-[9px] border"
              rows={5}
            />
            <p>Insert Event Banner</p>
            <input type="file" name="image"  onChange={handleImage} />
            <Button data="Submit" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateEventForm;
