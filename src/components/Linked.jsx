import React from 'react'
import { Link } from 'react-router-dom'

function Linked() {
  return (
    <div className='flex w-1/2 mx-auto  justify-evenly mt-10'>
      <div className='bg-gray-800 text-white p-5 rounded-md'>
        <p><Link to ="/user">User Home Sector</Link></p>
      </div>
      <div className='bg-gray-800 text-white p-5 rounded-md'>
        <p><Link to ="/admin">Admin Home Sector</Link></p>
      </div>
    </div>
  )
}

export default Linked