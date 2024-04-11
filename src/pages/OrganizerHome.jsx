import React from 'react'
import organizerpic from "../assets/orgadashboard.png";

const OrganizerHome = () => {
  const username = JSON.parse(localStorage.getItem('user-data'))
  console.log(username, 'username')
  return (
    <div className=' flex items-center gap-8'>
      <div className='text-center p-10'>
          <p className='font-extrabold text-4xl'>Welcome to Organizer Dashboard</p>
          <p className='font-extrabold text-4xl'>{username.name}</p>
      </div>
    <div>
    <img src={organizerpic} alt="home image" className='h-[100vh] ' />
    </div>
    </div>
  )
}

export default OrganizerHome