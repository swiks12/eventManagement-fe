import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import MapComponent from "../components/map/MapComponent";
import Button from "../components/reusable/Button";
import { useParams } from "react-router-dom";

const UpdateEventForm = ({ eventId }) => {
  const [locationDetails, setLocationDetails] = useState("");
  const [data, setData] = useState({
    name: "",
    date: "",
    address: "",
    time: "",
    price: "",
    description: "",
    coordinates: "",
    image: "",
    organizerId: JSON.parse(localStorage.getItem("user-data"))._id,
  });
  //ya databse anusar name hunu huncha

  const params=useParams();
  useEffect(() => {
    const fetchIndividualEvents = async () => {
      const url = `http://localhost:8080/api/events/individualEvents/${params.id}`;
      console.log(url);
      const { data: res } = await axios.get(url);
      setData(res);
    };
    fetchIndividualEvents();
  }, []);

   //[] vaneko aba ekchoti matra chalxa j gareni prama.id ta aaaihalcha

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://localhost:8080/api/events/update/${params.id}`;
      const { data: res } = await axios.put(url, data);
      toast.success("Event Updated Successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center m-5 gap-7">
        <div>
          <p className="font-extrabold text-4xl text-center">
            Update Event
          </p>
        </div>
        <div className="flex justify-center p-8 items-center rounded-2xl bg-opacity-100">
          <form className="flex flex-col gap-4 w-[80vw] " onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name of the event"
              required
              value={data.name}
              onChange={handleChange}
              className="bg-white rounded-2xl p-[9px] border"
            />
            <p>Browse Event Location</p>
            <MapComponent
              locationDetails={locationDetails}
              setLocationDetails={(locationDetails) =>
                setData((prev) => ({
                  ...prev,
                  address: locationDetails.address.details.name,
                  coordinates: [
                    locationDetails.place.lon,
                    locationDetails.place.lat,
                  ],
                }))
              }
            />
            <p>{locationDetails && locationDetails.address.details.name}</p>
            <p>Enter Event Day</p>
            <input
              type="date"
              name="date"
              placeholder="Enter event Date"
              required
              value={ data.date ?  new Date(data?.date)?.toISOString()?.split('T')[0]:''}
              onChange={handleChange}
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
            <input type="file" name="image" onChange={handleChange} />
            <Button data="Update" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateEventForm;
