const express = require("express");
const {getData,getSingleData,createData,upadateData,deleteData}=require("../controler/TestUser")
const sessionAuth=require("../middleware/sessionAuth")


const userTestRouter=express.Router();

userTestRouter.get("/get_data",sessionAuth,getData)

userTestRouter.get("/get_data/:index",getSingleData)

userTestRouter.post("/add_data",createData)

userTestRouter.put("/update_item/:index",upadateData)

userTestRouter.delete("/delete_item/:index",deleteData)

module.exports=userTestRouter
