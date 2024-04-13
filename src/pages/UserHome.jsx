import React from 'react'
import userHome from "../assets/userHome.png"

const UserHome = () => {
  return (
    <>
        <div className='flex items-center m-10 p-10 gap-[100px] bg-yellow-100 rounded-3xl'>
            <p className='text-4xl font-extrabold ml-[70px]'>Welcome to User Dashboard</p>
            <img src={userHome} className='h-[80vh]'/>
        </div>
    </>
  )
}

export default UserHome