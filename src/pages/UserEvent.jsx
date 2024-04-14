import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const UserEvent = () => {
    const navigate = useNavigate();
    const [data,setData]=useState([]);
    console.log(data);

    useEffect(()=>{
        const fetchUserEvents=async()=>{
            const url="http://localhost:8080/api/user/userEvents";
            const {data:res}=await axios.get(url,data);
            //data ko nwaran agreko ho res rakhera
            setData(res);
        }
        fetchUserEvents();      
    },[]);
  return (
    <div className='p-6 flex justify-evenly flex-wrap'>
        {data.map((item,i)=>(
            <div key={i} className='p-4 border rounded-2xl shadow-2xl mb-[30px]'>
                <img src={item.image.url} alt="banner" className="w-[40vw] rounded-xl " />
                    <div>
                    <div>
                        <p className="text-xl font-bold">Name :{item.name}</p>
                        <p><span className='font-bold'>Address: </span>{item.address}</p>
                        <p><span className='font-bold'>Date: </span>{item.date}</p>
                        <p><span className='font-bold'>Ticket Price: </span>{item.price}</p>
                        {/* <p><span className='font-bold'>Status: </span>{item.statusVal}</p> */}
                        <div className='flex justify-end'>
                        <span class="material-symbols-outlined " onClick={() => navigate(`/user/events/${item._id}`)}>
                        arrow_forward_ios
                        </span>
                        </div>

                    </div>
                    </div>
            </div>

        ))}
    </div>
  )
}

export default UserEvent