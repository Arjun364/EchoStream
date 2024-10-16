import React,{useState} from 'react'
import { Flowbite,Button, Modal,FloatingLabel } from "flowbite-react";
import { addCategoryAPI } from '../services/allAPIs';
import Swal from 'sweetalert2'

const AddCategory = () => {
  const [openModal, setOpenModal] = useState(false);
  const [category,setCategory]=useState("")

  const customTheme ={
    modal:{
      "body": {
        "base": "flex-1 overflow-auto px-6 py-3",
        "popup": "pt-0"
      },
    }
  }

  const handleAdd = async () => {
    if (!category) {
      alert(`The textfields cannot be empty`)
      return
    } else {
      let obj ={
        categoryName:category,
        Videos:[]
      }
      const response = await addCategoryAPI(obj)
      if (response.status >= 200 && response.status < 300) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: `Success`,
          text: `The category "${category}" is created successfully`,
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
          text: `The category "${category}" is failed in creating`,
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
    <Flowbite theme={{theme: customTheme}}>
      <Button color={'blue'} onClick={() => setOpenModal(true)}>Add category</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
        Add category
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
          <FloatingLabel variant="filled" label="Category name" onChange={(e)=>setCategory(e.target.value)} />
          </div>
        </Modal.Body>
        <Modal.Footer className='flex justify-end'>
          <Button onClick={handleAdd}>Add</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Flowbite>
  )
}

export default AddCategory