import React from 'react'
// components
import Navbar from './Navbar'


function Owner() {
  return (
    <div>
        <Navbar/>
        <div className='mt-20'>
            <h1 className='text-center text-4xl font-bold'>Beer - Group H - 40</h1>
        </div>
        <img className='h-80 w-80 overflow-hidden object-cover mx-auto mt-10' src="https://images.unsplash.com/photo-1531831108325-7fe9616bc780?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80" alt="beer" />
        <div className='w-2/3 mt-10 mx-auto'>
            <h3 className='font-bold text-center mb-2 text-xl'>Short Biography</h3>
            <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt vitae similique cum, quod distinctio eveniet, impedit unde maxime, laborum voluptates iste magnam a optio nesciunt nobis. Libero beatae perspiciatis rem blanditiis, dignissimos quod voluptatibus animi adipisci. Asperiores molestias ad velit, modi dolores quibusdam ducimus non facilis quam dolore placeat ipsam.</p>
        </div>
    </div>
  )
}

export default Owner