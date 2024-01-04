const mongoose = require("mongoose")

const dbConnection = () =>{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/usersData")
        console.log(`Database connnected successfully`)
    } catch (error) {
        console.log(`Database not connnected`)
    }
}
module.exports = dbConnection;