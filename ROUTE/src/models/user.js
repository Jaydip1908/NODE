const mongoose=require("mongoose")

const user_scema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        uniqe:true
    } ,
    password: String,
    age: Number,
})
const User = mongoose.model("User", user_scema)

module.exports=User