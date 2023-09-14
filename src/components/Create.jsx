import React,{useState} from 'react'

function Create({createUser}) {
    const [name,setName] = useState()
    const [lastname,setLastname] = useState()
    const [position,setPosition] = useState()
  return (
    <form className='mx-auto  md:w-2/3 mt-5 lg:w-1/2'>
        <div>
            <h2 className='font-bold text-xl'>Create User</h2>
        </div>
        <div className='flex justify-evenly mt-2 md:gap-4'>
            <input type="text"  className='bg-gray-200 p-2 rounded-md' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" className='bg-gray-200 p-2 rounded-md' placeholder='Lastname' value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
            <input type="text" className='bg-gray-200 p-2 rounded-md' placeholder='Position' value={position} onChange={(e)=>setPosition(e.target.value)}/>
        <button type='button' className='border bg-blue-800 p-2 rounded-md text-white' onClick={()=> createUser(name,lastname,position)} >Create</button>

        </div>
    </form>
  )
}

export default Create