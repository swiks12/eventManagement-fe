import React from "react";
import CreateEventForm from "./CreateEventForm";
import { Link } from "react-router-dom";

const OrganizerEvents = () => {
  return (
    <>
      <div >
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
