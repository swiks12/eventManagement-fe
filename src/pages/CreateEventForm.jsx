import React from "react";
import Button from "../components/reusable/Button";
import people from "../assets/people.png";
import creation from "../assets/creation.png";


const CreateEventForm = () => {
  return (
    <>
      <div className="flex flex-col justify-center m-5 ">
        <div>
          <p className="font-extrabold text-4xl ">Create your events now!!</p>
        </div>
        <div className="flex justify-center p-8 items-center gap-5">
          <img src={people} alt="" className=" h-[80vh]" />
          <form className="flex flex-col gap-4 w-[80vw] ">
            <input
              type="text"
              name="eventName"
              placeholder="Name of the event"
              required
              className="bg-white rounded-2xl p-[9px] border"
            />
            <p>Browse your Location</p>
            <button className="p-1 bg-black text-white rounded-2xl w-fit">
              Browse
            </button>
            <p>Enter Event Day</p>
            <input
              type="date"
              name="eventName"
              placeholder="Enter event Date"
              required
              className="bg-white rounded-2xl p-[9px] border"
            />
            <p>Enter event time</p>
            <input
              type="time"
              name="eventName"
              placeholder="Enter time of the event"
              className="bg-white rounded-2xl p-[9px] border"
              required
            />
            <input
              type="text"
              name="eventName"
              placeholder="Insert ticket price"
              required
              className="bg-white rounded-2xl p-[9px] border"
            />
            <p>Insert Event Banner</p>
            <input type="file" name="banner" />
            <Button data="Submit" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateEventForm;
