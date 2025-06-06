import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()
//CORS is a security feature implemented by browsers. It controls which frontend origins (domains) are allowed to access your backend APIs.
app.use(cors({
    origin:process.env.CORS_ORIGIN,  //Allow requests only from your frontend site
    credentials:true//	Allow cookies/headers to be shared securely
}))
app.use(express.json({limit:"16kb"}))//This allows your backend to accept and parse JSON data in the body of incoming requests.
app.use(express.urlencoded({extended:true,limit:"16kb"}))//This is used to parse URL-encoded data
app.use(express.static("public"))//It serves static files like
app.use(cookieParser())//It lets you read cookies from the req.cookies object.




export {app}