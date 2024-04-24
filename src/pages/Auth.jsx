import React, { useContext, useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAPI, registerAPI } from '../services/allAPI';
import { tokenAuthContext } from '../context/TokenAuth';




function Auth({ insideRegister }) {

  const{isAuthorised, setIsAuthorised}=useContext(tokenAuthContext)
  const navigate = useNavigate()

  const [userInputs, setUserInputs] = useState({
    username: '', email: '', password: ''
  })

  const handleRegister = async (e) => {
    e.preventDefault()
    if (userInputs.username && userInputs.email && userInputs.password) {
      //api call
      try {
        const result = await registerAPI(userInputs)
        console.log(result);
        if (result.status == 200) {
          toast.success(`welcome ${result.data.username}...please login to explore our website`)
          setUserInputs({ username: "", email: "", password: "" })
          setTimeout(() => {
            navigate('/login')

          }, 2000)

        } else {
          toast.error(result.response.data)
          setTimeout(() => {
            setUserInputs({ username: "", email: "", password: "" })

          }, 2000)
        }

      } catch (err) {
        console.log(err);
      }
    } else {
      toast.warn('Please fill the form completely!!!')
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    if (userInputs.email && userInputs.password) {
      //api call
      try {
        const result = await loginAPI(userInputs)
        if (result.status == 200) {
          //store existing user and token
          sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
          sessionStorage.setItem("token", result.data.token)
          setIsAuthorised(true)
          toast.warning(`welcome ${result.data.existingUser.username}...`)
          setUserInputs({ username: "", email: "", password: "" })
          setTimeout(() => {
            navigate('/')
          }, 2000)
        } else {
          toast.error(result.response.data)
        }
      }
      catch (err) {
        console.log(err);
      }
    }
    else {
      toast.warning("please fill the form completely")
    }
  }


  return (
    <>
      <div style={{ width: '100%', minHeight: '120vh' }} className="d-flex justify-content-center align-items-center pt-3">
        <div className="container w-75">
          <Link to={'/'} style={{ textDecoration: 'none' }}> <i className="fa-solid fa-arrow-left "></i>Back to Home</Link>
          <div className="card shadow p-5">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img className='w-100 ' src="https://www.zipperminds.com/counselloronboard/image/login-user.png" alt="" />
              </div>
              <div className="col-lg-6">
                <h1 className='fw-bolder mt-2 py-1'>Project Fair</h1>
                <p className='fw-bolder mt-2 '>Sign {insideRegister ? 'up' : 'in'} to your account</p>
                <Form >

                  {
                    insideRegister &&
                    <FloatingLabel
                      controlId="floatingInputName"
                      label="Username"
                      className="mb-3"
                    >
                      <Form.Control value={userInputs.username} onChange={(e) => setUserInputs({ ...userInputs, username: e.target.value })} type="text" placeholder="Username" />
                    </FloatingLabel>
                  }

                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                  >
                    <Form.Control value={userInputs.email} onChange={(e) => setUserInputs({ ...userInputs, email: e.target.value })} type="email" placeholder="name@example.com" />
                  </FloatingLabel>

                  <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control value={userInputs.password} onChange={(e) => setUserInputs({ ...userInputs, password: e.target.value })} type="password" placeholder="Password" />
                  </FloatingLabel>

                  {
                    insideRegister ?
                      <div className='mt-3'>
                        <button onClick={handleRegister} className='btn btn-primary'>Register</button>
                        <p>Already have an account? Click here to <Link className='text-info' style={{ textDecoration: 'none' }} to={'/login'}>Login</Link></p>
                      </div> :
                      <div className='mt-3'>
                        <button onClick={handleLogin} className='btn btn-primary'>Login</button>
                        <p>New user? Click here to <Link className='text-info' style={{ textDecoration: 'none' }} to={'/register'}>Register</Link></p>
                      </div>
                  }

                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000} />

    </>
  )
}

export default Auth