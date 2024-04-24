import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../context/TokenAuth'


function Header({ insideDashBoard }) {
  const{isAuthorised, setIsAuthorised}=useContext(tokenAuthContext)

  const navigate = useNavigate()

  const logout = () => {
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')
  }
  return (
    <>
      <Navbar style={{ zIndex: '1' }} className="card shadow top-0 position-fixed w-100">
        <Container>
          <Navbar.Brand>
            <Link style={{ textDecoration: 'none' }} className='fw-bolder text-dark' to={'/'}>Project Fair</Link>
          </Navbar.Brand>
          {insideDashBoard &&
            <div className='ms-auto'>
              <button onClick={logout} style={{ textDecoration: 'none' }} className='btn btn-link fw-bolder '>Log Out</button>
            </div>
          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header