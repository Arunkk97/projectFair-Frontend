import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { SERVER_URL } from '../services/serverURL';



function ProjectCard({displayData}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card onClick={handleShow} className=' shadow mb-5 btn' style={{ width: '20rem' }}>
      <Card.Img height={'200px'} variant="top" src={`${SERVER_URL}/uploads/${displayData?.projectImage}`} />
      <Card.Body>
        <Card.Title className='py-1'>{displayData?.title}</Card.Title>
      </Card.Body>
    </Card>


    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <img className='img-fluid w-100' src={`${SERVER_URL}/uploads/${displayData?.projectImage}`} alt="" />
            </div>
            <div className="col-lg-6">
              <h3 className='py-1'>{displayData?.title}</h3>
              <h5 className='py-1' ><span className='fw-bolder'>Languages Used</span>{displayData?.language}</h5>
              <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description:</span>L{displayData?.overview}</p>
            </div>
          </div>

          <div className='mt-2 float-start'>
            <a href={displayData?.github} target='_blank' className='btn '><i className="fa-brands fa-github py-1"></i></a>
            <a href={displayData?.website} target='_blank' className='btn '><i className="fa-solid fa-link py-1"></i></a>
          </div>
        </Modal.Body>
       
      </Modal>
    </>
  )
}

export default ProjectCard