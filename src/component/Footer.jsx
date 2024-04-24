import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <>
    <div style={{ height: '500px' }} className=' w-100 mt-5 shadow px-3 '>
            <div className='footer-content d-flex justify-content-between'>
                <div style={{width:'400px'}} className='media'>
                    <h3 className='d-flex py-2'>{' '}
                    Project Fair</h3>
                    <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ducimus labore debitis pariatur explicabo distinctio vitae obcaecati, eaque architecto deleniti recusandae modi porro, laboriosam unde iusto esse maiores amet assumenda!</p>
                </div>
                <div className='link d-flex flex-column'>
                    <h5 className='d-flex py-2'>Links</h5>
                    <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing Page</Link>
                    <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
                    <Link to={'/watch'} style={{textDecoration:'none',color:'white'}}>Watch History</Link>
                </div>
                <div className='guide d-flex flex-column'>
                <h5 className='py-2'>Guides</h5>
                <a href="https://react.dev/" target='blank' style={{textDecoration:'none',color:'white'}}>React JS</a>
                <a href="https://react-bootstrap.netlify.app/" target='blank' style={{textDecoration:'none',color:'white'}}>React Bootstrap</a>
                <a href="https://reactrouter.com/en/main" target='blank' style={{textDecoration:'none',color:'white'}}>Routing</a>
                </div>
                <div className='contact'>
                    <h5 className='py-2' >Contact Us</h5>
                    <div className='d-flex'>
                        <input type="text" className='form-control me-1' placeholder='Email id ' />
                        <button className='btn btn-info'><i class="fa-solid fa-arrow-right py-1"></i></button>
                    </div>
                   <div className='icons d-flex justify-content-between mt-3'>
                       <a target='blank' style={{textDecoration:'none',color:'white'}} href="https://www.facebook.com/"><i class="fa-brands fa-facebook "></i></a>
                       <a  target='blank'style={{textDecoration:'none',color:'white'}} href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                       <a target='blank' style={{textDecoration:'none',color:'white'}} href="https://twitter.com/?lang=en"><i class="fa-brands fa-x-twitter"></i></a>
                       <a target='blank' style={{textDecoration:'none',color:'white'}} href="https://www.linkedin.com/feed/"><i class="fa-brands fa-linkedin"></i></a>
                   </div>

                </div>

            </div>
            <p className='text-center mt-5'>Copyright &copy; 2024 Media player. Built with React</p>

        </div>
    </>
  )
}

export default Footer