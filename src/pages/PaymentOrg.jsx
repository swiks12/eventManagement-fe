import React, { useState,useEffect } from 'react';
import axios from "axios";

const PaymentOrg = () => {
    const organizer = JSON.parse(localStorage.getItem("user-data"));
  const organizerId = organizer._id;

  const [data, setData] = useState([]);
  const [eventData, setEventData] = useState('');
  const [userData, setuserData] = useState('');




  useEffect(() => {
    const fetchData = async () => {
      const url = `http://localhost:8080/api/paidEvents/${organizerId}`;
      try {
        const { data: res } = await axios.get(url);
        setData(res);
        console.log(res);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, [organizerId]);



//particular event info gathering
  useEffect(()=>{
    const fetchEvent=()=>{
        const url=`http://localhost:8080/api/events/individualEvents/${eventId}`
        const {data:res}=axios.get(url,data);
        setEventData(res);
    }
    fetchEvent();
  });


  //userInfo gathering
  useEffect(()=>{
    const fetchEvent=()=>{
        const url=`http://localhost:8080/api/user//userDetails/${userId}`
        const {data:res}=axios.get(url,data);
        setuserData(res);
    }
    fetchEvent();
  });


  return (
    <div>PaymentOrg</div>
  )
}

export default PaymentOrg