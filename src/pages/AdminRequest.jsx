import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminRequest = () => {
  //use of use state here coz j data aairacha automatically data ma gayera basiracha
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchPendingEvents = async () => {
      const url = "http://localhost:8080/api/admin/pendingEvents";
      const { data: res } = await axios.get(url, data);
      setData(res);
    };
    fetchPendingEvents();
  }, []);

  const handleApproval = async (id, status) => {
    const url = `http://localhost:8080/api/events/updateStatus/${id}`;
    await axios.patch(url, { statusVal: status });

    // Remove the event from the state
    setData(data.filter(item => item._id !== id)); // Update data without the deleted item

  };

  // const handleReject = async(id) => {
  //     const url=`http://localhost:8080/api/events/updateStatus/${id}`;
  //     const {data:res}=await axios.patch(url,
  //     {statusVal:'rejected'});
  //     console.log(res);
  // };

  return (
    <>
      {/* yo tala ko div ma chahi sab items haru hncha i.e tala are all the children mathi ko div ma changes gare flex parent ho */}
      {/* sab item map hanne div talako ho */}
      <div className="p-4 flex justify-evenly flex-wrap">
        {data.map((item, i) => (
          //harek item mapp hanne div yo yo chai
          <div key={i} className="p-4 border rounded-2xl shadow-xl mb-[30px]">
            <img
              src={item.image.url}
              alt="banner"
              className="w-[40vw] rounded-xl "
            />
            <div>
              <div>
                <p className="text-xl font-bold">Name :{item.name}</p>
                <p>
                  <span className="font-bold">Address: </span>
                  {item.address}
                </p>
                <p>
                  <span className="font-bold">Date: </span>
                  {item.date}
                </p>
                <p>
                  <span className="font-bold">Ticket Price: </span>
                  {item.price}
                </p>
                {/* <p><span className='font-bold'>Status: </span>{item.statusVal}</p> */}
              </div>
              <div className="flex flex-row gap-3 mt-2">
                <button
                  className="bg-green-300  pl-3 pr-3 rounded-2xl place-self-end font-medium"
                  onClick={() => handleApproval(item._id, "accepted")}
                >
                  Accept
                </button>
                <button
                  className="bg-red-400  pl-3 pr-3 rounded-2xl place-self-end font-medium"
                  onClick={() => {
                    handleApproval(item._id, "rejected");
                  }}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdminRequest;
