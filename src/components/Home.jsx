import React from 'react'
// components
import Linked from './Linked'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <div className='w-1/2 mt-20 mx-auto'>
                <h1 className='text-6xl font-bold text-center'>Generation Thailand</h1>
                <h1 className='text-6xl font-bold text-center'>React - Assessment</h1>
            </div>
            <Linked/>
        </div>
    )
}

export default Home