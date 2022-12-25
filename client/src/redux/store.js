import {configureStore } from "@reduxjs/toolkit"
import  userReducer  from "./slice/userSlice"
import  postReducer  from "./slice/postSlice"


export default configureStore({
    reducer:{
        user: userReducer,
        post: postReducer
   
    }
})