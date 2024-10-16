import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import {  FaClockRotateLeft} from "react-icons/fa6";
import { Link } from 'react-router-dom';
import AddVideo from '../Components/AddVideo'
import ViewVideo from '../Components/ViewVideo'
import AddCategory from '../Components/AddCategory';
import Category from '../Components/Category';
import { getCategoryAPI } from '../services/allAPIs';

const Home = () => {
  const [data,setData]= useState([])

  const getCategory=async()=>{
    const reponse = await getCategoryAPI()
    setData(reponse.data)
  }


  
  useEffect(()=>{
    getCategory()
  },[])

  return (
    <Box component={"section"} className='w-full h-full  dark:bg-black dark:text-white'>
      <Box component={"div"} className="w-full h-auto py-[2rem] px-[3rem] flex justify-between">
        <AddVideo/> 
        <Link to={'/watchHistory'}>
        <h2 className="heading3 flex items-center gap-4 hover:underline hover:underline-offset-8 cursor-pointer">Watch History <FaClockRotateLeft />
        </h2>
        </Link>
      </Box>
      <Box component={"div"} className='w-full h-[30rem] px-[3rem] flex justify-between'>
        {/* video sections */}
        <ViewVideo/>
        {/* category section  */}
        <Box component={"div"}  className='min-w-[25rem] h-[30rem] flex flex-col gap-3 p-6 '>
          <h2 className="heading3">Category</h2>
          <AddCategory/>
          <Box component={'div'} className='w-full h-full overflow-y-scroll flex flex-col gap-3 overflow-x-hidden no-scrollbar' >
            {data.length!==0? 
            data.map((item)=>(
              <Category key={item.id} details={item} />
            ))
            :"Nothing here"}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home