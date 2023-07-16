const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI)
  } catch (err) {
    console.log(err)
  }
}

module.exports = connectDB
// const  mongoose = require ('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/task')


