import { commonAPI } from "./commonAPI"
import { SERVER_URL } from "./serverURL"

//register api
export const registerAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)

}

//login api
export const loginAPI=async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqBody)

}

//add project
export const addProjectAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add-Project`,reqBody,reqHeader)

}

//get all projects
export const getAllProjectsAPI=async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/all-projects?search=${searchKey}`,"",reqHeader)
}

//user project
export const getUserProjectsAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/user-projects`,"",reqHeader)
}

//home project

export const getHomeProjectsAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/home-projects`,"")
}

//editProject
export const editProjectAPI=async(projectId,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit-project/${projectId}`,reqBody,reqHeader)
}

//remove project
export const removeProjectAPI=async(projectId,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/remove-project/${projectId}`,{},reqHeader)
}

//update user
export const updateUserAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/edit-user`,reqBody,reqHeader)

}




