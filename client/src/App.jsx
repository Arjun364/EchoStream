import { useState } from 'react'
import { MdEditDocument } from "react-icons/md";
import { Flowbite } from "flowbite-react";
import Header from "./Components/Header"
import Footersection from './Components/Footersection';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import WatchHistroy from './Pages/WatchHistory';
import PageNotFound from './Pages/PageNotFound';

import './App.css'
import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <Flowbite>
      <div className='w-full min-h-[100vh] flex flex-col justify-between'>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/watchHistory' element={<WatchHistroy />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footersection />
      </div>
    </Flowbite>
  )
}

export default App
