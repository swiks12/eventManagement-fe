import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Button from "../components/reusable/Button";

const IndividualEvent = () => {
  const [data, setData] = useState(""); // Initialize data as null

  const params = useParams();

  useEffect(() => {
    const fetchIndividualEvents = async () => {
      const url = `http://localhost:8080/api/events/individualEvents/${params.id}`;
      const { data: res } = await axios.get(url);
      setData(res);
    };
    fetchIndividualEvents();
  }, [params.id]);


  //dependency ma rakheko chiz jaba jaba change huncha taba taba chai api hit hanne-aaile ko case ma


  if (!data) {
    return <div>Loading...</div>; // Return a loading indicator while data is being fetched
  }

  return (
    <div className="p-12 flex flex-col gap-4 border shadow-2xl rounded-2xl m-5">
      {data.image && (
        <img src={data.image.url} alt="banner" className="rounded-2xl" />
      )}
      {/* Check if data.image exists */}
      <p className="text-2xl font-bold ">{data.name}</p>
      <div className="flex flex-row gap-3">
        <span class="material-symbols-outlined">location_on</span>
        <p>{data.address}</p>
      </div>
      <div className="flex flex-row gap-[100px]">
        <div className="flex flex-row gap-3">
          <span className="material-symbols-outlined">calendar_month</span>
          <p>{data.date}</p>
        </div>
        <div className="flex flex-row gap-3">
          <span class="material-symbols-outlined">schedule</span>
          <p>{data.time}</p>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <span class="material-symbols-outlined">paid</span>
        <p>{data.price}</p>
      </div>
      <div className="border rounded-2xl p-4 ">
        <p>{data.description}</p>
      </div>
      <div className="flex justify-center mt-8">
        <Button data="Buy Ticket" />
      </div>
    </div>
  );
};

export default IndividualEvent;
