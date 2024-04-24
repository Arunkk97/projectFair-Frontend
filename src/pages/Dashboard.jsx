import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import View from '../component/View'
import Profile from '../component/Profile'

function Dashboard() {
  const[displayName,setDisplayName]=useState("")

  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      const{username}=JSON.parse(sessionStorage.getItem("existingUser"))
      setDisplayName(username)

    }else{
      setDisplayName("")
    }
  })
  return (
    <>
    <Header insideDashBoard={true}/>
    <div style={{marginTop:'100px'}} className='container-fluid'>
      <h1 className='py-1'>Welcome <span className='text-warning'>{displayName?.split(" ")[0]}</span>,</h1>
      <div className="row mt-2">
        <div className="col-lg-8">
          <View/>
          
        </div>
        <div className="col-lg-4">
          <Profile/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard