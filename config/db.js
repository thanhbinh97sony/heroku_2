const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURL')

const connectDB = async () =>{
    try {
        await mongoose.connect(db);
        console.log('Ket noi thanh cong DB')
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = connectDB;