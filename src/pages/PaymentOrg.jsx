import React, { useEffect, useState } from "react";
import axios from "axios";

const PaymentOrg = () => {
  const organizer = JSON.parse(localStorage.getItem("user-data"));
  const organizerId = organizer?._id; // Safeguard in case localStorage does not have 'user-data'

  const [data, setData] = useState([]);
  const [eventDetails, setEventDetails] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [totalSales, setTotalSales] = useState(0);

  useEffect(() => {
    if (!organizerId) return;

    const fetchData = async () => {
      const url = `http://localhost:8080/api/paidEvents/${organizerId}`;
      try {
        const { data: res } = await axios.get(url);
        const payments = res.allOrganizerEvent || []; // Ensure data is an array
        setData(payments);

        const newEventDetails = {};
        const newUserDetails = {};

        for (const payment of payments) {
          try {
            const eventResponse = await axios.get(
              `http://localhost:8080/api/events/individualEvents/${payment.eventId}`
            );
            newEventDetails[payment.eventId] = eventResponse.data;
          } catch (eventError) {
            console.error(
              `Error fetching event details for eventId ${payment.eventId}:`,
              eventError
            );
          }

          try {
            const userResponse = await axios.get(
              `http://localhost:8080/api/user/userDetails/${payment.userId}`
            );
            newUserDetails[payment.userId] = userResponse.data;
          } catch (userError) {
            console.error(
              `Error fetching user details for userId ${payment.userId}:`,
              userError
            );
          }
        }

        setEventDetails(newEventDetails);
        setUserDetails(newUserDetails);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching payments:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [organizerId]);

  useEffect(() => {
    if (Object.keys(eventDetails).length > 0) {
      const prices = data.map(
        (payment) => eventDetails[payment.eventId]?.price || 0
      );
      const totalPrice = prices.reduce((sum, price) => sum + price, 0);
      setTotalSales(totalPrice);
    }
  }, [data, eventDetails]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-yellow-100 h-[100vh]">
      <div className="flex justify-end mr-[140px]">
        <p className="mb-4 font-extrabold text-2xl  text-green-600 ">
          Total Sales: {totalSales}
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-pink-300 h-[70vh] rounded-l-2xl flex items-center">
          <p className="font-bold p-2">Payments received</p>
        </div>
        <table className="border w-[80vw] h-[70vh] bg-white">
          <thead className="border">
            <tr className="border bg-pink-300">
              <th className="border p-2">User Name</th>
              <th className="border ">Event Name</th>
              <th className="border ">Price</th>
            </tr>
          </thead>
          <tbody className="border">
            {data.length > 0 ? (
              data.map((payment) => (
                <tr key={payment._id}>
                  <td className="border text-center">
                    <div className="flex justify-center gap-2">
                      <span class="material-symbols-outlined text-pink-700">
                        face
                      </span>
                      <p className="font-bold">
                        {userDetails[payment.userId]?.name || "Loading..."}
                      </p>
                    </div>
                  </td>
                  <td className="border font-bold ">
                    <div className=" flex justify-center">
                      <p className="bg-blue-200 w-fit p-1 rounded-lg">
                        {eventDetails[payment.eventId]?.name || "Loading..."}
                      </p>
                    </div>
                  </td>
                  <td className="border font-bold">
                    <div className="flex justify-center">
                      <p className="bg-green-300 w-fit p-1 rounded-lg">
                        Rs.
                        {eventDetails[payment.eventId]?.price || "Loading..."}
                      </p>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No paid events found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentOrg;
