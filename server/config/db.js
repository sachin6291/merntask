const mongoose = require('mongoose')
require('dotenv').config({path: 'variables.env'})

const connectDB = async () =>{
  try {
    await mongoose.connect(process.env.DB_MONGO,{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useFindAndModify:false
    })
    console.log('successful connection to the DB')
  } catch (error) {
    console.error(error);
    process.exit(1);//stop the app
  }
}
module.exports = connectDB