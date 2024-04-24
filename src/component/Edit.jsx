import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import uploadImg from '../assets/uploadImg.png'
import { SERVER_URL } from '../services/serverURL';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProjectAPI } from '../services/allAPI';
import { editResponseContext } from '../context/ContextAPI';



function Edit({ projects }) {
  // console.log(projects);
  const{editResponse,setEditResponse}=useContext(editResponseContext)

  const [projetData, setProjectData] = useState({
    id: projects?._id, title: projects?.title, language: projects?.language, overview: projects?.overview, github: projects?.github, website: projects?.website, projectImage: ""
  })
  const [preview, setPreview] = useState("")
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (projetData?.projectImage) {
      setPreview(URL.createObjectURL(projetData.projectImage))
    } else {
      setPreview("")
    }

  }, [projetData?.projectImage])

  const handleClose = () => {
    setShow(false);
    setProjectData({
      id: projects?._id, title: projects?.title, language: projects?.language, overview: projects?.overview, github: projects?.github, website: projects?.website, projectImage: ""
    })
    setPreview("")
  }
  const handleShow = () => {
    setShow(true);
    setProjectData({
      id: projects?._id, title: projects?.title, language: projects?.language, overview: projects?.overview, github: projects?.github, website: projects?.website, projectImage: ""
    })

  }

  const handleUpdateProject = async () => {
    const { title, language, overview, github, website, projectImage } = projetData
    if (!title || !language || !overview || !github || !website) {
      toast.warning('Please fill the form completely!!!')
    } else {
      //proceed to api call
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("language", language)
      reqBody.append("overview", overview)
      reqBody.append("github", github)
      reqBody.append("website", website)
      preview ? reqBody.append("projectImage", projectImage) : reqBody.append("projectImage", projects.projectImage)
      const token = sessionStorage.getItem("token")

      if (token) {
        const reqHeader = {
          "Content-Type": preview ? "multipart/form-data" : "application/json",
          "Authorization": `Bearer ${token}`
        }
        //API call
        try {
          const result = await editProjectAPI(projetData.id, reqBody, reqHeader)
          console.log(result);
          if (result.status == 200) {
            handleClose()
            //pass response view
            setEditResponse(result)
          } else {
            console.log(result.response);
          }

        } catch (err) {
          console.log(err);
        }
      }
    }
  }
  return (
    <>
      <button onClick={handleShow} className='btn'> <i className="fa-solid fa-edit me-1 "></i></button>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="row">
            <div className="col-lg-4">
              <label>
                <input onChange={e => setProjectData({ ...projetData, projectImage: e.target.files[0] })} type='file' style={{ display: 'none' }} />
                <img style={{ height: '200px' }} className='img-fluid' src={preview ? preview : `${SERVER_URL}/uploads/${projects?.projectImage}`} alt="" />
              </label>
            </div>
            <div className="col-lg-8">
              <div className='mb-2'>
                <input value={projetData?.title} onChange={e => setProjectData({ ...projetData, title: e.target.value })} type="text" className='form-control' placeholder='Project title' />
              </div>
              <div className=' mb-2'>
                <input value={projetData?.language} onChange={e => setProjectData({ ...projetData, language: e.target.value })} type="text" className='form-control' placeholder='Languages used in the project' />
              </div>
              <div className=' mb-2'>
                <input value={projetData?.github} onChange={e => setProjectData({ ...projetData, github: e.target.value })} type="text" className='form-control' placeholder='Project Github Link' />
              </div>
              <div className='mb-2'>
                <input value={projetData?.website} onChange={e => setProjectData({ ...projetData, website: e.target.value })} type="text" className='form-control' placeholder='Project Website Link' />
              </div>

            </div>
            <div className='mb-2'>
              <input value={projetData?.overview} onChange={e => setProjectData({ ...projetData, overview: e.target.value })} type="text" className='form-control' placeholder='Project Overview' />
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpdateProject} variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' theme='colored' autoClose={3000} />

    </>
  )
}

export default Edit