import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bg-gray-700'>
        <ul className='flex gap-5 py-5 px-10 font-bold text-xl justify-end border-b border-gray-400 drop-shadow-md'>
            <li ><Link to = "/" className='bg-gray-200 px-2 pb-2 pt-1 rounded-sm hover:border-gray-400 hover:border-2 hover:bg-gray-700 hover:text-white'>Home</Link></li>
            <li><Link to = "/owner" className='text-white'>Owner</Link></li>
        </ul>
    </div>
  )
}

export default Navbar