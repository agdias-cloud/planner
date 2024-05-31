const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  
    try {

        const conn  = await mongoose.connect(process.env.MONGO_URI); 
        console.log(`connected to ${conn.connection.host}`)
    }
    catch(error)  {
        console.log(error.message)
    }

}

module.exports = connectDB;

