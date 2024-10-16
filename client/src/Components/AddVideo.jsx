import React from 'react'
import { useState } from "react";
import { Button, Modal, FloatingLabel, Flowbite } from "flowbite-react";
import { FaPhotoVideo } from "react-icons/fa";
import { FaCloudArrowUp } from "react-icons/fa6";
import { addVideoAPI } from '../services/allAPIs';
import Swal from 'sweetalert2'




const AddVideo = () => {

  const customTheme = {
    modal: {
      "header": {
        "base": "flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600",
        "popup": "border-b-0 p-2",
        "title": "flex items-center gap-3 text-[2rem] font-medium text-gray-900 dark:text-white",
        "close": {
          "base": "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
          "icon": "h-5 w-5"
        }
      },
    }
  }

  // usestate to control the modal state of open or close
  const [openModal, setOpenModal] = useState(false);

  // the video deatils
  const [videoDetails, setVideoDetails] = useState({
    caption: "",
    url: "",
    img: ""
  })

  // console.log(videoDetails);

  //  function to convert the linke to embbed link 
  const getEmbbedLink = (e) => {
    // console.log(e.target.value);
    const value = e.target.value
    const ycode = value.slice(-31)
    const yLink = `https://www.youtube.com/embed/${ycode}`
    setVideoDetails({ ...videoDetails, url: yLink })


  }

  // The btn functon to add the video details to the database
  const handleAdd = async () => {
    const { caption, url, img } = videoDetails
    if (!caption || !url || !img) {
      alert(`The textfields cannot be empty`)
      return
    } else {
      const response = await addVideoAPI(videoDetails)
      if (response.status >= 200 && response.status < 300) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: `Success`,
          text: `The video "${caption}" is submited successfully`,
          showConfirmButton: true,
          confirmButtonText: "Back",
          timer: 2500
        });
      } else {
        // alert(`The video "${caption}" is failed in uploading`)
        Swal.fire({
          position: "top",
          icon: "error",
          title: `${response.message}`,
          text: `The video "${caption}" is failed in uploading`,
          showConfirmButton: true,
          confirmButtonText: "Back",
          timer: 2500
        });
      }
    }
    // to close the modal
    setOpenModal(false)
  }

  return (
    <Flowbite theme={{ theme: customTheme }}>
      {/* model title */}
      <h2 className="heading3 flex items-center gap-4 hover:underline hover:underline-offset-8 cursor-pointer" onClick={() => setOpenModal(true)}>Upload new video <FaCloudArrowUp /></h2>
      {/* modal body */}
      <Modal className='' show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header >
          <FaPhotoVideo /> Upload Videos
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-1">
            <p className="text-lg leading-relaxed font-semibold text-gray-500 ">
              Please fill the following details</p>
            <FloatingLabel variant="filled" label="Video Caption" onChange={(e) => setVideoDetails({ ...videoDetails, caption: e.target.value })} />
            <FloatingLabel variant="filled" label="Video Image" onChange={(e) => setVideoDetails({ ...videoDetails, img: e.target.value })} />
            <FloatingLabel variant="filled" label="Video Url" onChange={getEmbbedLink} />
          </div>
        </Modal.Body>
        <Modal.Footer className=''>
          <div className='w-full flex justify-end gap-3'>
            <Button onClick={handleAdd}>Upload</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </Flowbite>
  )
}

export default AddVideo