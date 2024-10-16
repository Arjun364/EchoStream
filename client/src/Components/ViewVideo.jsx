import { Box } from '@mui/material'
import VideoCard from "../Components/VideoCard"
import { Scrollbar } from 'react-scrollbars-custom';
import React, { useEffect, useState } from 'react'
import { getVideoAPI } from '../services/allAPIs';


const ViewVideo = () => {
  const [data,setData]=useState([])
  const getvideo =async()=>{
    const reponse = await getVideoAPI()
    setData(reponse.data) 
  }
  // console.log(data);
  
  useEffect(()=>{
    getvideo()
  },[])
  return (
    <Box component={"div"} className='w-full '>
      <h2 className="heading2">All videos</h2>
      <Box component={"div"} className='w-full max-h-[25rem] flex flex-col gap-4 flex-wrap overflow-x-scroll overflow-y-hidden p-4 no-scrollbar'>
      {
          data.length !== 0 ? data.map((item) => (
            <VideoCard key={item.id} videoDetails={item} />
          )) : "Nothing found"
        }
      </Box>
    </Box>
  )
}

export default ViewVideo