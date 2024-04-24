import React, { useContext, useEffect, useState } from 'react'
import Edit from '../component/Edit'
import Add from '../component/Add'
import { getUserProjectsAPI, removeProjectAPI } from '../services/allAPI';
import { addResponseContext, editResponseContext } from '../context/ContextAPI';


function View() {
  const{addResponse, setAddResponse}=useContext(addResponseContext)
  const{editResponse,setEditResponse}=useContext(editResponseContext)
  const [userProject, setUserProject] = useState([])

  console.log(userProject);

  useEffect(() => {
    getUserProject()
  }, [addResponse,editResponse])

  const getUserProject = async () => {
    const token = sessionStorage.getItem('token')
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    try {
      const result = await getUserProjectsAPI(reqHeader)
      console.log(result);
      if (result.status == 200) {
        setUserProject(result.data)
      }

    } catch (err) {
      console.log(err);
    }
  }

  const handleDeleteProject=async(projectId)=>{
    const token=sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      //api call
      const result=await removeProjectAPI(projectId,reqHeader)
      if(result.status==200){
        getUserProject()
      }else{
        console.log(result);
      }
    }

  }
  return (
    <>
      <div className='d-flex justify-content-between w-100'>
        <h3 className=' text-warning'>All Projects</h3>
        <div className=""><Add /></div>
      </div>

      <div className="mt-3">
        {userProject?.length > 0 ?
          userProject?.map((projects) => (
            <div className='d-flex justify-content-between border rounded  p-2 mb-3'>
              <h5 >{projects?.title}</h5>
              <div className='icons d-flex'>
                <div className='btn'> <Edit projects={projects} /></div>
                <div className='btn'><a href={projects?.github} target='_blank'> <i className="fa-brands fa-github mt-2"></i></a></div>
                <button onClick={()=>handleDeleteProject(projects?._id)} className='btn'><i className="fa-solid fa-trash text-danger "></i></button>
              </div>
            </div>
          ))
          :
          <div className='fw-bolder text-center text-danger'>No projects uploaded yet</div>
        }
      </div>
    </>
  )
}

export default View