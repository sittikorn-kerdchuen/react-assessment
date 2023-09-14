import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading'
// components
import Create from './Create'



function Table({showCreate}) {

    const [users, setUsers] = useState([])
    const [loding, setLoding] = useState(false)
    const [error, setError] = useState("")
    const display = (showCreate === undefined? true:false)
    

    useEffect(() => {
        let abortController = new AbortController()

        const loadData = async () => {
            try {
                setLoding(true)
                let response = await axios.get(`https://jsd5-mock-backend.onrender.com/members`)
                setUsers(response.data)
                setError("")
                console.log(response)
            } catch (error) {
                setError("Someting went wrong!", error)
            } finally {
                setLoding(false)
            }
        }
        loadData()
        return () => abortController.abort()
    },[]);


    const createUser = async (name, lastname, position) => {
        try {
            setLoding(true)
            const requestData = {
                name: name,
                lastname: lastname,
                position: position,
            };
            const response = await axios.post(`https://jsd5-mock-backend.onrender.com/members`, requestData);
            console.log(response)
            

        } catch (error) {
            setError("Someting went wrong! can't create data", error)
        } finally {
            const showAlert = () => {
                return (
                    <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                        <span className="font-medium">Create success!</span> `${name} ${lastname} ${position} is created`
                    </div>
                )
            }
            showAlert()
            setLoding(false)
        }
    }

    const deleteUser = async (id) => {
        console.log(id)
        try {
            setLoding(true);
            const response = await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`);
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
            console.log("Delete success!!", response);
            
        } catch (error) {
            setError("Something went wrong! Can't delete data", error);
        } finally {
            setLoding(false);
        }
    };
    


    return (
        <div>
            {!display&& <Create createUser={createUser} />}
            {loding? <ReactLoading type='bubbles' color='#333' height={'20%'} width={'20%'} className='text-center mx-auto' /> : 
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-2/3 mx-auto my-10">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Lastname
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Position
                        </th>

                        <th scope="col" className="px-6 py-3" hidden={display}>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody >
                    {users.map((item, idx) => {
                        return (
                            <tr key={idx} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item?.name}
                                </th>
                                <td className="px-6 py-4">
                                    {item?.lastname}
                                </td>
                                <td className="px-6 py-4">
                                    {item?.position}
                                </td>
                                <td className="px-6 py-4" hidden={display}>
                                    <button className='bg-gray-300 text-black px-2 rounded' onClick={()=>deleteUser(item.id)}>Delete</button>
                                </td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
        </div>}

            
        </div>
    )
}

export default Table