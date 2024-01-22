const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.URL)
        console.log('Db connected')
    } catch (error) {
        console.log('connection error')
    }
}

module.exports = {connectDB}