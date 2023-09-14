import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ReactLoading from 'react-loading'
// components
import Create from './Create'
import Update from './Update'



function Table({ showItem }) {

    const [users, setUsers] = useState([])
    const [loding, setLoding] = useState(false)
    const [error, setError] = useState("")
    const display = (showItem === undefined ? !showItem : showItem) //set show element some elememt

    // Set show items 5 items/page
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPage = 5;
    const startPage = (currentPage - 1) * itemsPage;
    const endPage = startPage + itemsPage;
    const displayUserTable = users.slice(startPage, endPage);

    // Set page control
    const totalPages = Math.ceil(users.length / itemsPage);
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };


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
    }, []);


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

            setLoding(false)
        }

    }

    const updateUser = async (id, name, lastname, position) => {
        try {
            setLoding(true);
            const requestData = {
                name: name,
                lastname: lastname,
                position: position,
            };
            const response = await axios.put(`https://jsd5-mock-backend.onrender.com/members/${id}`, requestData);
            console.log(response);
            // Handle the successful update response here
        } catch (error) {
            setError("Something went wrong! Can't update data", error);
        } finally {
            setLoding(false);
        }
    };


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
            {!display && <Create createUser={createUser} />}
            {loding ? <ReactLoading type='bubbles' color='#333' height={'20%'} width={'20%'} className='text-center mx-auto' /> :
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

                                <th scope="col" className={`${display?`hidden`:'px-6 py-3'}`}>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody >
                            {displayUserTable.map((item, idx) => {
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
                                        <td className={`${display?`hiden p-0`:`py-4 flex mx-5`}`}  >
                                            {/* <button className='bg-yellow-500 text-black px-2 rounded' onClick={() => <Update updateUser={updateUser} />} hidden={display}>Update</button> */}
                                            <button className='bg-red-500 text-white px-2 rounded' onClick={() => deleteUser(item.id)} hidden={display}>Delete</button>
                                        </td>
                                    </tr>
                                )

                            })}
                        </tbody>
                    </table>
                    <div>
                        <div className="mt-4  justify-center grid-flow-row px-5">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    className={`${currentPage === index + 1
                                        ? 'bg-gray-600 text-white'
                                        : 'bg-gray-300 text-black'
                                        } px-3 py-1 mx-1 mb-3 rounded`}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>}

            {/* Modal */}

           

        </div>
    )
}

export default Table