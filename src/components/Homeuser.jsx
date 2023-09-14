import React from 'react'
// components
import Navbar from './Navbar'
import Linked from './Linked'
import Table from './Table'

function Homeuser() {
  return (
    <div>
      <Navbar />
      <div className='w-1/2 mt-20 mx-auto'>
        <h1 className='text-6xl font-bold text-center'>Generation Thailand</h1>
        <h1 className='text-6xl font-bold text-center'>Home - User Sector</h1>
      </div>
      <Linked />
      <Table />
    </div>
  )
}

export default Homeuser