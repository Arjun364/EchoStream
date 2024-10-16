import React, { useState } from 'react'
import { Navbar } from "flowbite-react";
import icon from '../assets/headphones-simple-solid.svg'
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const Header = () => {
  const location = useLocation();
  const [page,setPage]= useState("/")

  useEffect(() => {    
    setPage(location.pathname);
  }, [location]);

  return (
    <Navbar fluid className='bg-white dark:text-white py-7 dark:bg-black' sx={{}}>
    <Navbar.Brand  href="https://flowbite-react.com">
      <img src={icon} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">EchoStrem</span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse >
      <Link to={'/'} className='flex items-center'>
      <Navbar.Link  active={page === "/"}  onClick={()=>setPage('/')}>
        Landing Page
      </Navbar.Link>
      </Link>
      <Link to={'/home'} className='flex items-center'>
      <Navbar.Link  active={page === "/home"} onClick={()=>setPage('/home')}>
        Home
      </Navbar.Link>
      </Link>
      <Link to={'/watchHistory'} className='flex items-center'>
      <Navbar.Link   active={page === "/watchHistory"} onClick={()=>setPage('/watchHistory')}>
        Watch History
      </Navbar.Link>
      </Link>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Header