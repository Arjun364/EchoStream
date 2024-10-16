import React ,{ useState } from 'react'
import { Footer } from "flowbite-react";
import { Link } from 'react-router-dom';

const Footersection = () => {
  const [page,setPage]= useState("land")

  return (
    <Footer container className='rounded-none'>
      <Footer.Copyright href="#" by="EchoStream™" year={2022} />
    </Footer>
  )
}

export default Footersection