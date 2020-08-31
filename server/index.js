const express = require('express')
const connectDB = require('./config/db')

//create the server
const app = express()

//connect to the database
connectDB()

//server port different from 3000
const PORT = process.env.PORT || 4000



//start the app
app.listen(PORT, ()=>{
  console.log(`the server is working in the port ${PORT}`)
})