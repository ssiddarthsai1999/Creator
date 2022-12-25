import  express  from "express";

import {userModel} from "../models/postModel.js";
import bcrypt from "bcrypt"
import  jwt from "jsonwebtoken";
const router= express.Router()
//REGISTER
router.post("/register", async(req,res)=>{
const {email,username,password}=req.body
try {
  const user=  await userModel.create({
email,
username,
password,
  })

  res.status(200).json(user)
} catch (error) {
  res.status(400).json(error)
}

})

//login
router.post("/login",async(req,res)=>{
  const {email,password}=req.body
  try {
    const user=await userModel.findOne({email})
    if(email===user.email){
      const iscorrectpassword= user.password===password
      if(!iscorrectpassword){
        res.status(400).json("password wrong")
      }else{
        res.status(200).json(user)
      }
    }
 
  } catch (error) {
    res.status(400).json(error)
  }
})
















export default router