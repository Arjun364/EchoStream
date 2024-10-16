import React, { useState } from 'react'
import { Flowbite, Button, Card } from "flowbite-react";
import { AiFillDelete } from "react-icons/ai";
import { Modal } from "flowbite-react";
import { addWatchHistoryAPI, deleteVideoAPI } from '../services/allAPIs';



const VideoCard = ({ videoDetails }) => {
  const [openModal, setOpenModal] = useState(false);



  // modal opening 
  const handleModel = async () => {
    const { caption, url } = videoDetails

    // generate date and time 
    let today = new Date()
    console.log(today);

    // convert the date and time
    let timestamp = new Intl.DateTimeFormat('en-US', { year: "numeric", month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(today)
    console.log(timestamp);

    // watchHistory video details [object]
    const details = {
      caption,
      url,
      timestamp
    }

    // api calling to add the watch history elemenents
    await addWatchHistoryAPI(details)
    setOpenModal(true)
  }


  const customTheme = {
    modal: {
      "header": {
        "base": "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
        "popup": "border-b-0 p-2",
        "title": "flex items-center gap-3 text-[2rem] font-medium text-gray-900 dark:text-white",
        "close": {
          "base": "ml-auto hidden inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
          "icon": "h-5 w-5"
        }
      },
    },
    card: {
      "root": {
        "base": " flex max-w-[25rem] rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 overflow-hidden",
        "children": "flex min-w-[18rem] min-h-[20rem] flex-col justify-between gap-4 p-0",
        "horizontal": {
          "off": "flex-col",
          "on": "flex-col md:max-w-xl md:flex-row"
        },
      }
    },
    button: {
      color: {
        red: 'bg-red-500 hover:bg-blue-600', // Custom color for the button
      },
    },
  }


  // delete section
  const deleteVideo = async () => {
    await deleteVideoAPI(videoDetails.id)
    window.location.reload()
  }

  // drag function is defined
  
  const dragStarted =(e,videoId)=>{
    console.log(`video is started to drag ,${videoId}`)
    console.log(e);

     e.dataTransfer.setData('videoId',videoId)
  }

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Card
        // enable the dragging
        draggable={true}
        // enable the on ondragstart condition
        onDragStart={(e) => dragStarted(e,videoDetails.id)}>
        <div className='w-full h-[15rem] bg-cover bg-center bg-no-repeat cursor-pointer'
          style={{
            backgroundImage: videoDetails.img ? `url('${videoDetails.img}')` : "none"
          }}
          onClick={handleModel}
        ></div>
        <span className='flex items-center justify-between gap-4 px-4 py-2'>
          <h4 className="heading4 max-w-[20rem]">{videoDetails.caption}</h4>
          <Button color={"red"} className='w-[4rem]' onClick={deleteVideo}>
            <AiFillDelete className='text-[1.5rem]' />
          </Button>
        </span>
      </Card>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{videoDetails.caption}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <iframe className='w-full rounded-md' height="315" src={videoDetails.url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </Modal.Body>
        <Modal.Footer className='flex justify-end'>
          <Button onClick={() => setOpenModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>

    </Flowbite>
  )
}

export default VideoCard