import React, { useEffect, useState } from "react";
import axios from "axios";

const Attendee = () => {
  const organizer = JSON.parse(localStorage.getItem("user-data"));
  const organizerId = organizer._id;

  const [data, setData] = useState([]);
  const [groupedData, setGroupedData] = useState({});
  const [eventDetails, setEventDetails] = useState({});

  useEffect(() => {
    const fetchEvents = async () => {
      const url = `http://localhost:8080/api/paidEvents/${organizerId}`;
      try {
        const { data: res } = await axios.get(url);
        setData(res.allOrganizerEvent);
        console.log(res.allOrganizerEvent);
        const grouped = groupByEventId(res.allOrganizerEvent);
        await fetchEventDetails(Object.keys(grouped));
        setGroupedData(grouped);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, [organizerId]);

  const groupByEventId = (tickets) => {
    return tickets.reduce((acc, ticket) => {
      const { eventId } = ticket;
      if (!acc[eventId]) {
        acc[eventId] = 0;
      }
      acc[eventId]++;
      return acc;
    }, {});
  };

  const fetchEventDetails = async (eventIds) => {
    const details = {};
    for (const eventId of eventIds) {
      const url = `http://localhost:8080/api/events/individualEvents/${eventId}`;
      try {
        const { data: eventDetail } = await axios.get(url);
        details[eventId] = eventDetail;
      } catch (error) {
        console.error(`Error fetching event details for ${eventId}:`, error);
      }
    }
    setEventDetails(details);
  };

  return (
    <div>
      <div className="flex">
        {Object.keys(groupedData).map((eventId) => (
          <div
            key={eventId}
            className="p-4 border m-5 w-fit rounded-xl shadow-md"
          >
            <img
              src={eventDetails[eventId]?.image.url || ""}
              alt={eventDetails[eventId]?.name || "Event Image"}
              className="w-[25vw]"
            />

            {/* <p>Event ID: {eventId}</p> */}
            <div className="flex items-center gap-5 mt-6">
              <h2 className="font-black">{eventDetails[eventId]?.name || "Loading..."}</h2>
              <p className="bg-green-500 w-fit p-1 rounded-xl font-bold">Attendees: {groupedData[eventId]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendee;
