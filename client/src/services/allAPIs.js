import { commonAPI } from "./commonAPI"
import { serverUrl } from "./serverUrl"


// add video api
export const addVideoAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/videos`,reqBody)
}

// to get all videos 
export const getVideoAPI =async()=>{
    return await commonAPI('get',`${serverUrl}/videos`,{})
}

// to delete the id video
export const deleteVideoAPI = async(id)=>{
    return await commonAPI('delete',`${serverUrl}/videos/${id}`,'')
}

// cat3gory --------------------------------------------------------

export const addCategoryAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/category`,reqBody)
}

// display category

export const getCategoryAPI =async()=>{
    return await commonAPI('get',`${serverUrl}/category`,{})
}

// delete category
export const deleteCategoryAPI = async(id)=>{
    return await commonAPI('delete',`${serverUrl}/category/${id}`,'')
}
// gwt particular api category
export const getParticularCategoryAPI = async(id)=>{
    return await commonAPI('get',`${serverUrl}/category/${id}`,'')
}


export const addVideoToCategoryAPI = async(id,reqBody)=>{
    return await commonAPI('put',`${serverUrl}/category/${id}`,reqBody)
}

// watchHistory -----------------------------------------------------

// add watchhistory
export const addWatchHistoryAPI = async(reqBody)=>{
    return await commonAPI('post',`${serverUrl}/watchHistory`,reqBody)
}

// display watchhistory
export const getWatchHistoryAPI =async()=>{
    return await commonAPI('get',`${serverUrl}/watchHistory`,{})
}

// to delete the video in watch history
export const deleteWatchHistoryAPI = async(id)=>{
    return await commonAPI('delete',`${serverUrl}/watchHistory/${id}`,'')
}

//  get video details for a particular video
export const getVideoDetailsAPI = async(id)=>{
    return await commonAPI('get',`${serverUrl}/videos/${id}`,{})
}

// to store the particular video detrails to the category section 
