import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ProjectCard from '../component/ProjectCard'
import { Card } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHomeProjectsAPI } from '../services/allAPI';


function Home() {
  const [homeProjects, setHomeProjects] = useState([])
  const navigate = useNavigate()
  const [loginStatus, setLoginStatus] = useState(false)

  console.log(homeProjects);

  useEffect(() => {
    getHomeProjects()
    if (sessionStorage.getItem('token')) {
      setLoginStatus(true)
    } else {
      setLoginStatus(false)
    }
  }, [])

  const handleProjects = () => {
    if (loginStatus) {
      navigate('/projects')
    } else {
      toast.warning('please login to get full access to our projects')
    }

  }

  const getHomeProjects = async () => {
    try {
      const result = await getHomeProjectsAPI()
      console.log(result);
      if (result.status == 200) {
        setHomeProjects(result.data)
      }

    } catch (err) {
      console.log(err);

    }

  }
  return (
    <>
      {/* landing */}
      <div style={{ minHeight: '100vh' }} className='d-flex justify-content-center align-items-center w-100 shadow'>
        <div className='container'>
          <div className='row align-items-center  '>
            <div className="col-lg-6">
              <h1 className='py-2' style={{ fontSize: '60px' }}><i style={{ fontSize: '70px' }} class="fa-solid fa-people-roof p-2"></i>Project Fair</h1>
              <p style={{ textAlign: 'justify' }}>Project Fair is part of the University of Edinburgh Business School. It is built upon a strong body of our research and practice over more than a decade into the psychological impact of dual salaries in the INGO sector impacting employee motivation, performance, retention, learning and teamwork.</p>
              {
                loginStatus ?
                  <Link className='btn btn-warning' to={'/dashboard'}>Manage your projects</Link>
                  :
                  <Link className='btn btn-warning' to={'/login'}>Start's to Explore</Link>
              }
            </div>
            <div className="col-lg-6">
              <img className='w-100 img-fluid' src="https://www.dynaway.com/hs-fs/hubfs/Illustration%20(39)%20%5BConverted%5D.png?width=4010&height=3475&name=Illustration%20(39)%20%5BConverted%5D.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* projects */}
      <div className='mt-3 mb-2 text-center'>
        <h1 className='text-center mb-5 py-2'>Explore our Project's</h1>
        <marquee>
          <div className='d-flex'>
            {
            homeProjects?.length>0 &&
            homeProjects?.map((project)=>(
              <div key={project} className='me-5'>
              <ProjectCard displayData={project} />
            </div>
            ))
             
            }
          </div>
        </marquee>

        <button onClick={handleProjects} className='btn btn-link '>Click here to view more Projects...</button>
      </div>

      {/* testimonial */}

      <div className="d-flex justify-content-center align-items-center mt-5 mb-5 flex-column ">
        <h1 className='py-2'>Our Testimonials</h1>
        <div className='d-flex justify-content-evenly align-items-center mt-3 w-100 '>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://i.pinimg.com/736x/64/81/22/6481225432795d8cdf48f0f85800cf66.jpg" alt="" />
                <span className='py-1'> Melwin</span>
              </Card.Title>
              <Card.Text>
                <div className='d-flex justify-content-center '>
                  <i className="fa-solid fa-star text-warning py-1" ></i>
                  <i className="fa-solid fa-star text-warning py-1" ></i>
                  <i className="fa-solid fa-star text-warning py-1"></i>
                  <i className="fa-solid fa-star py-1 " ></i>
                  <i className="fa-solid fa-star py-1"></i>
                </div>
                <p>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQKSoytWKTqfM4EkOJXpSRqwWPvT26OcOf8PRxb5l2QnXeBbxUaJXEna54Qo9dcXDC9M4&usqp=CAU" alt="" />
                <span className='py-1'> Alexia</span>
              </Card.Title>
              <Card.Text>
                <div className='d-flex justify-content-center '>
                  <i className="fa-solid fa-star text-warning py-1" ></i>
                  <i className="fa-solid fa-star text-warning py-1" ></i>
                  <i className="fa-solid fa-star text-warning py-1"></i>
                  <i className="fa-solid fa-star text-warning py-1" ></i>
                  <i className="fa-solid fa-star text-warning py-1"></i>
                </div>
                <p>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGWm7kgMH1PEsycRwkyqPcPB1b2NITpD8j2g&usqp=CAU" alt="" />
                <span className='py-1'> Max</span>
              </Card.Title>
              <Card.Text>
                <div className='d-flex justify-content-center '>
                  <i className="fa-solid fa-star text-warning py-1" ></i>
                  <i className="fa-solid fa-star text-warning py-1" ></i>
                  <i className="fa-solid fa-star text-warning py-1"></i>
                  <i className="fa-solid fa-star text-warning py-1" ></i>
                  <i className="fa-solid fa-star py-1 "></i>
                </div>
                <p>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>

        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />





    </>
  )
}

export default Home