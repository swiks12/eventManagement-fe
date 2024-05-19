import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";

const Success = () => {
  const divRef = useRef(null);
  const [data, setData] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchIndividualEvents = async () => {
      try {
        const url = `http://localhost:8080/api/events/individualEvents/${params.id}`;
        const { data: res } = await axios.get(url);
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData(null); // Reset data to null in case of an error
      }
    };
    fetchIndividualEvents();
  }, []);

  const getUserDetails = JSON.parse(localStorage.getItem("user-data"));

  const handleDownload = () => {
    html2canvas(divRef.current, { allowTaint: true, useCORS: true }).then(
      (canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "div_image.png";
        link.click();
      }
    );
  };

  return (
    <>
      <div className="flex flex-row m-6">
        <span class="material-symbols-outlined text-green-400">done</span>
        <p className="font-extrabold text-green-400">Payment was Successful</p>
      </div>
      {data && (
        <div className="flex justify-center">
          <div className=" flex w-fit " ref={divRef}>
            <div className="flex items-center">
              <div>
                <img
                  src={data.image.url}
                  alt=""
                  className="w-[55vw] rounded-r-xl h-[30vh]"
                />
              </div>
              <div className="bg-gray-200 h-[30vh] rounded-2xl p-2 border-l-[2px] border-dashed border-black border-wid">
                <p className="font-bold mb-[25px] mt-[25px]">{data.name}</p>
                <p>
                  <span className="font-bold">Buyer:</span>
                  {getUserDetails.name}
                </p>
                <p>
                  <span className="font-bold">Price:</span>
                  {data.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {!data && <p>Data not available</p>}
      <div className="flex justify-center mt-6" onClick={handleDownload}>
        <div className="flex items-center gap-2 bg-black text-white p-3  rounded-xl">
          <span class="material-symbols-outlined">download</span>
          <button>Download Ticket</button>
        </div>
      </div>
    </>
  );
};

export default Success;
