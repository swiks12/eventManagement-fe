import React from 'react'

const Button = ({data}) => {
  return (
    <button className='bg-white text-black rounded-2xl p-3 hover:bg-gray-100 w-fit place-self-center font-medium'>{data}</button>
  )
}

export default Button