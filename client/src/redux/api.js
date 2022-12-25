import axios from "axios"

const API= axios.create({baseURL:"http://localhost:5000"})
//,,,,,,,,,,,,,auth,,,,,,,,,,,,,,,,,,,
export const registerUser= (formData)=>API.post("/auth/register",formData)
export const loginUser= (formData)=>API.post("/auth/login",formData)
//,,,,,,,,,,,,,user,,,,,,,,,,,,,,,,,,,
export const updateUser= (formData,id)=>API.put(`/user/update/${id}`,formData)
export const updatequestions = (formData, id) =>
    API.put(`/user/addto/${id}`, formData);
export const getSingleUser= (id)=>API.get(`user/find/${id}`)
export const getAllUsers=()=>API.get("/user/find")

export const followUsers = (otheruserid, yourId) =>
    API.put(`/user/follow/${otheruserid}`, { yourId });
export const searchAllUsers=(data)=>API.get(`/user/search?search=${data}`)
//,,,,,,,,,,,,,post,,,,,,,,,,,,,,,,,,,
export const createPost= (formData)=>API.post("/post/create",formData)
export const getPosts=()=>API.get("/post/view")
export const getUserPost=(id)=>API.get(`/post/userpost/${id}`)
export const getSinglePost = (id) => API.get(`/post/view/${id}`);
export const likePosts = (postid, userId) => API.put(`/post/like/${postid}`, {userId});
export const updateAnswer = ( formData,id) => API.put(`/post/view/${id}`, formData);

 