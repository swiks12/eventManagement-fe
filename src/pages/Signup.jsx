import React from 'react'
import signup from "../assets/signup.png";
import Button from '../components/reusable/Button';

const Signup = () => {
  return (
    
        <div className='bg-gradient-to-r from-yellow-tone to-pink-tone p-4 h-[100vh] flex items-center justify-center'>
            <div className='flex items-center space-x-[100px] bg-white  w-[70vw] m-8 rounded-3xl bg-opacity-50 justify-center'>
                <div className>
                    <p className='font-bold text-3xl mt-[20px] text-center'>Sign Up</p>
                
                    <img src={signup} alt="sign up" className='h-[70vh]'/>
                </div>
                <div>   

                    <form action="" className='flex flex-col gap-3'>
                        <input type="text" placeholder='Name' name="name" className='bg-white rounded-2xl p-[9px] w-[250px]'/>
                        <input type="email" placeholder='Email' name="email" className='bg-white rounded-2xl p-[9px] w-[250px]'/>
                        <input type="password" placeholder="Password" name="password"  className='bg-white rounded-2xl p-[9px] w-[250px]'/>
                        <input type="password" placeholder="Retype Password" name="rePassword"  className='bg-white rounded-2xl p-[9px] w-[250px]'/>
                        <div>
                            <p>Define your role:</p>
                            <div className='flex row gap-4'>
                                <input type="radio" name="role" value="user"/>User
                                <input type="radio" name="role" value='organizer'/>Organizer
                            </div>
                        </div>

                        <Button data="Sign Up"/>
                    </form>
                </div>
            </div>
        </div>
    
  )
}

export default Signup