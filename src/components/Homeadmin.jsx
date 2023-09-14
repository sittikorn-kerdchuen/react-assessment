import React,{useState} from 'react'
// components
import Linked from './Linked'
import Navbar from './Navbar'
import Table from './Table'
// import Create from './Create'

function Homeadmin() {
  const [showCreate,setShowCreate] = useState(false)

  return (
    <div>
      <Navbar/>
      <div className='w-1/2 mt-20 mx-auto'>
        <h1 className='text-6xl font-bold text-center'>Generation Thailand</h1>
        <h1 className='text-6xl font-bold text-center'>Home - Admin Sector</h1>
      </div>
      <Linked />
      {/* <Create/> */}
      <Table showCreate={showCreate} />
    </div>
  )
}

export default Homeadmin