import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserEvent = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const fetchUserEvents = async () => {
      const url = "http://localhost:8080/api/user/userEvents";
      const { data: res } = await axios.get(url, data);
      //data ko nwaran agreko ho res rakhera
      setData(res);
    };
    fetchUserEvents();
  }, []);
  return (
    <>
      <p className="text-4xl font-extrabold p-4 text-center">
        Find The Events Here!!
      </p>
      <div className="p-6 flex flex-wrap gap-8">
        {data.map((item, i) => (
          <div key={i} className="p-4 ml-3 border rounded-2xl shadow-2xl mt-4 mb-4">
            <img
              src={item.image.url}
              alt="banner"
              className="w-[25vw] rounded-lg "
            />
              <div className="flex flex-col gap-4">
                <p className="text-xl font-bold">{item.name}</p>
                {/* <p><span className='font-bold'>Address: </span>{item.address}</p> */}
                <div className="flex flex-row gap-2">
                  <span class="material-symbols-outlined">calendar_month</span>
                  <p>
                    <span className="font-bold"></span>
                    {item.date}
                  </p>
                </div>
                <div className="flex flex-row">
                    <span class="material-symbols-outlined">paid</span>
                    <p>
                    {item.price}
                    </p>
                </div>
                {/* <p><span className='font-bold'>Status: </span>{item.statusVal}</p> */}
                <div className="flex justify-end">
                  <span
                    class="material-symbols-outlined "
                    onClick={() => navigate(`/user/events/${item._id}`)}
                  >
                    arrow_forward_ios
                  </span>
                </div>
              </div>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default UserEvent;
