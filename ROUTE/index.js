const express = require('express')
const mongoose = require('mongoose')
const { userRoute } = require("./src/routes/user");
const userTestRoute = require("./src/routes/TestUser")
// const router=express.Router()


const app = express();


app.use(express.json());
app.use('', userTestRoute)

app.use("/",(req, res, next) => {
    // console.log("Application level routing")
    // throw new Error("something went wrong...")
    next()
})

// app.use("/user/login",(err, req, res,next) => {
//     console.error(err.stack)
//     console.error(err.message)
//     res.status(500).send('Something broke!')
   
// })
app.use('/user', userRoute)


app.use("/user",(req, res, next) => {
    // console.log("Router level routing")
    next()
})

app.get('/user/:id', (req, res, next) => {
    res.send('USER')
    next();
})


app.get("/", (req, res) => {
    res.send("Server is Listenig")
})

app.listen(8000, () => {
    mongoose.connect('mongodb://localhost:27017/user_db')
    console.log("DB is Connected")
    console.log("server started")
});