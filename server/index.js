const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors');

//create the server
const app = express()

//connect to the database
connectDB()

//enable cors
app.use(cors())

//enable express.json
app.use(express.json({extended:true}))

//server PORT different from 3000
const PORT = process.env.PORT || 4000

//Import Routes
app.use('/api/users', require('./routes/users'))
app.use("/api/auth", require("./routes/auth"));
app.use("/api/projects", require("./routes/projects"));
app.use("/api/tasks", require("./routes/tasks"))


//start the app
app.listen(PORT,'0.0.0.0', ()=>{
  console.log(`the server is working in the PORT ${PORT}`)
})