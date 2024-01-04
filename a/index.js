const express = require("express")
const dbConnection = require("./database/dbconn.js")
const router = require("./routers/userRouter.js")

const app = express();


app.use(express.json())
app.use("/user", router)
dbConnection()


const PORT = 7000;
app.listen(PORT, ()=>{
    console.log(`Server is started at port ${PORT}`)
})