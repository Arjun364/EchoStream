import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { Table, Button, Flowbite } from "flowbite-react";
import { Link } from 'react-router-dom';
import { FaClockRotateLeft } from "react-icons/fa6";
import { AiFillDelete } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import Swal from 'sweetalert2'
import { deleteWatchHistoryAPI, getWatchHistoryAPI } from '../services/allAPIs';

const WatchHistory = () => {
  const [data, setData] = useState([])

  // tailwind custom them section
  const customTheme = {
    button: {
      color: {
        red: 'bg-red-500 hover:bg-blue-600 dark:text-white', // Custom color for the button
      },
    }
  }

  // display history

  const displayHistory = async () => {
    const reponse = await getWatchHistoryAPI()
    setData(reponse.data)
  }


  const deleteThatHistory=async(id)=>{
    console.log(`current id:${id}`);
    await deleteWatchHistoryAPI(id)
    Swal.fire({
      position: "top",
      icon: "success",
      title: `Success`,
      text: `The ${id} history is deleted successfully`,
      showConfirmButton: true,
      confirmButtonText: "Back",
    });

    displayHistory() 
  }
  
  useEffect(()=>{
    displayHistory()
  },[])

  return (
    <Flowbite theme={{ theme: customTheme }} >
      <Box component={"div"} className='w-full min-h-[100vh] dark:bg-black pt-[2rem] dark:text-white'  >
        <Box component={"div"} className="w-full h-auto py-[2rem] px-[3rem] flex justify-between">
          <h2 className="heading3 flex items-center gap-4">Watch History <FaClockRotateLeft />
          </h2>
          <Link to={'/home'}>
            <h2 className="heading3 flex items-center gap-4 hover:underline hover:underline-offset-8 cursor-pointer">Home <IoHome />
            </h2>
          </Link>
        </Box>
        <Box component={"div"} className='w-full px-[4rem]' >
          <Table>
            <Table.Head>
              <Table.HeadCell>Video ID</Table.HeadCell>
              <Table.HeadCell>Caption</Table.HeadCell>
              <Table.HeadCell>url</Table.HeadCell>
              <Table.HeadCell>Time stamp</Table.HeadCell>
              <Table.HeadCell>
                Action
              </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">

              {data.length !== 0 ?
                data.map((item) => (
                  <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {item.id}
                    </Table.Cell>
                    <Table.Cell>{item.caption}</Table.Cell>
                    <Table.Cell>{item.url}</Table.Cell>
                    <Table.Cell>{item.timestamp}</Table.Cell>
                    <Table.Cell>
                      <Button color={'red'} className='w-[2.5rem]' ><AiFillDelete className='text-[1.2rem]' onClick={()=>deleteThatHistory(`${item.id}`)} /></Button>
                    </Table.Cell>
                  </Table.Row>
                ))
                :
                <Table.Row>
                <Table.Cell colSpan="5" className="bg-white dark:border-gray-700 dark:bg-gray-800 uppercase text-center">
                  empty
                </Table.Cell>
              </Table.Row> 
                }

            </Table.Body>
          </Table>
        </Box>
      </Box>
    </Flowbite>
  )
}

export default WatchHistory