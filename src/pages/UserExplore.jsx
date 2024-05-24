import React, { useEffect, useState } from "react";
import UserGeolocation from "./UserGeolocation";
import world from "../assets/world.png";
import mapEl from "../assets/mapEl.png";
import map1 from "../assets/27.png";
import map2 from "../assets/28.png";


import axios from "axios";
import { useNavigate } from "react-router-dom";

// Function to calculate Euclidean distance
function calculateEuclideanDistance(point1, point2) {
  const dx = point2.latitude - point1.latitude;
  const dy = point2.longitude - point1.longitude;
  return Math.sqrt(dx * dx + dy * dy);
}

// Function to sort events based on distances
function sortByDistance(events) {
  return events.sort((a, b) => a.distance - b.distance);
}

// Component for exploring nearest events
const UserExplore = () => {
  const navigate = useNavigate();
  // State for storing events and user location
  const [events, setEvents] = useState([]);
  const location = UserGeolocation();

  // Fetching all the events from the API
  useEffect(() => {
    const fetchUserEvents = async () => {
      try {
        const url = "http://localhost:8080/api/user/userEvents";
        const { data } = await axios.get(url);
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
        // Handle error state or display a message to the user
      }
    };
    fetchUserEvents();
  }, []);

  // Function to find k nearest events using k-NN
  const nearestEvents = (k) => {
    if (!location.loaded || !events.length) return [];

    const userLocation = {
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng,
    };

    // Calculate distances for each event
    const eventsWithDistances = events.map((event) => {
      const distance = calculateEuclideanDistance(userLocation, {
        latitude: event.coordinates[1],
        longitude: event.coordinates[0],
      });
      return { ...event, distance };
    });

    // Sort events by distance in ascending order using custom sorting function
    const sortedEvents = sortByDistance(eventsWithDistances);

    // Return the k nearest events
    return sortedEvents.slice(0, k);
  };

  // Get the nearest events list with k = 4
  const nearestEventsList = nearestEvents(3);
  //   console.log(nearestEventsList); // Check the sorted events in the console

  // Render the component with the nearest events list
  return (
    <div
      style={{
        backgroundImage: `url(${map1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
      }}
    >
      <div className="flex items-center gap-3 border m-6 rounded-2xl shadow-xl w-fit p-4 bg-white opacity-90 ">
        {/* <img src={world} alt="" className="w-[15vw] " /> */}
        <span className="material-symbols-outlined text-5xl text-black">
          home_pin
        </span>
        <div>
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
      <div className="m-6">
        <p className="text-2xl font-semibold mb-3">
          Nearest Events According to your location:
        </p>
        <ul>
          {nearestEventsList.map((event) => (
            <div className="border p-2 rounded-xl mb-[10px] shadow-md bg-white opacity-90">
              <li key={event._id}>
                <p className="font-bold">{event.name}</p>
                {/* <p>{event.date ? new Date(event.date).toISOString().split('T')[0] : ''}</p>
                <p>{event.time}</p> */}
                <p>{event.address}</p>
              </li>
              <div
                className="flex justify-end"
                onClick={() => {
                  navigate(`/user/events/${event._id}`);
                }}
              >
                <span className="material-symbols-outlined">
                  arrow_forward_ios
                </span>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserExplore;
