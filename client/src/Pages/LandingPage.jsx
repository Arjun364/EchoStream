import { Box, Container } from '@mui/material'
import React from 'react'
import { Button, Card } from "flowbite-react";
import img from '../assets/img.webp'
import img2 from '../assets/img.webp'
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <Box component={"div"} className='w-full h-auto bg-blue-200 '>

      {/* hero section */}
      <Box component={"div"} className='w-full h-[70vh]  flex py-[2rem] px-[3rem] items-center justify-between' sx={{backgroundColor:"rgb(14 14 14)"}}>
        <Box className="max-w-[40rem] dark:text-white flex flex-col gap-2">
          <h1 className="heading1 dark:text-blue-700">Welcome to EchoStrem</h1>
          <p className='leading-6 tracking-wide'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, in, soluta deserunt cupiditate, itaque nemo blanditiis saepe ducimus enim asperiores eos corporis laboriosam illo ratione? Officia sunt porro totam hic magnam, laborum ea nihil. Temporibus ad exercitationem, animi perspiciatis doloremque non et nam aspernatur optio.</p>
          <Link to={'/home'}>
          <Button color="blue" className='w-[10rem] uppercase mt-3'>Get started</Button>
          </Link>
        </Box>
        <img src={img} alt="image" />
      </Box>

      {/* features */}
      <Box component={"div"} className='w-full h-auto dark:bg-black flex flex-col gap-4 py-[4rem] px-[3rem] dark:text-white'>
        <h1 className="heading1 text-center">Features</h1>
        {/* cards */}
        <Box className="flex justify-center gap-6" >
          {/* card1 */}
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={img2}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </Card>
          {/* card2 */}
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={img2}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </Card>
          {/* card3 */}
          <Card
            className="max-w-sm"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={img2}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </Card>
        </Box>
      </Box>
        {/* info section */}
        <Box className="w-full h-auto dark:bg-black flex flex-col gap-4 py-[4rem] px-[3rem] dark:text-white">
          <Container className='min-h-[30rem] border-2 border-solid border-white flex items-start py-[2rem]'>
            <Box className="h-full flex flex-col gap-4 justify-around">
              <h1 className="heading1">Simple fast and powerfull</h1>
              <div className='flex flex-col gap-4'>
              <p className='w-[40rem]'><span className='font-extrabold'>Play Everthing: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquam debitis illum consequuntur tenetur modi non commodi deleniti illo tempora, accusamus perferendis architecto, maiores, soluta exercitationem cum. Porro, sint adipisci.</p>
              <p className='w-[40rem]'><span className='font-extrabold'>Play Everthing: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquam debitis illum consequuntur tenetur modi non commodi deleniti illo tempora, accusamus perferendis architecto, maiores, soluta exercitationem cum. Porro, sint adipisci.</p>
              <p className='w-[40rem]'><span className='font-extrabold'>Play Everthing: </span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquam debitis illum consequuntur tenetur modi non commodi deleniti illo tempora, accusamus perferendis architecto, maiores, soluta exercitationem cum. Porro, sint adipisci.</p>
              </div>
            </Box>
            <iframe  className='min-h-[30rem] w-full' src="https://www.youtube.com/embed/OgRoRBLZbUQ?si=vjV3j8N0_Zf3UTJI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </Container>
        </Box>
    </Box>

  )
}

export default LandingPage