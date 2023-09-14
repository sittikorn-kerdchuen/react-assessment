import React,{useState} from 'react'

function Test() {
    const data = [
        {
            names : "Vic",
            lastname : "Beer"
        },
        {
            names : "Vic",
            lastname : "Beer"
        },
        {
            names : "Vic",
            lastname : "Beer"
        }
    ]

    const [user,setUser] = useState(data)
    const createData =() => {
        setUser((prev) => {...prev,dataUser})
    }

  return (
    <div>

        <button onClick={()=>}></button>
    </div>
  )
}

export default Test