const express=require('express')
const app=express()
require('dotenv').config()
const port=4000

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listeening on port ${port}`);

})