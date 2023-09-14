import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
// components
import Homeadmin from './components/Homeadmin.jsx'
import Homeuser from './components/Homeuser.jsx'
import Owner from './components/Owner.jsx'

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/user",
    element : <Homeuser />
  },
  {
    path : "/admin",
    element : <Homeadmin />
  },
  {
    path : "/owner",
    element : <Owner />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
