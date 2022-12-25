import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors"
import userRoute from "./routes/userRoute.js"
import authRoute from "./routes/authRoute.js"
import postRoute from "./routes/postRoute.js"



import dotenv from "dotenv"
dotenv.config()

const app= express()

app.use(morgan("dev"))
app.use(express.json({limit:"30mb", extended : true}))
app.use(express.urlencoded({limit:"30mb", extended : true}))
app.use(bodyParser.json({limit:"30mb", extended : true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended : true}))

app.use(cors())

//connect with mongoose

mongoose.connect(process.env.MONGO_URL)
.then(()=>app.listen(process.env.PORT,()=>console.log(`connected to ${process.env.PORT}`)))
.catch((err)=>console.log(err))

//usage of routes
app.use("/auth",authRoute)
app.use("/user",userRoute)
app.use("/post",postRoute)






