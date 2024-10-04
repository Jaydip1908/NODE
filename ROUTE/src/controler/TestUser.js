const User = require("../models/user")

const getData = async (req, res) => {
    console.log("User Model", User)
    const user = await User.find();
    res.json(user);
}

const getSingleData = async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ _id: id });
    if (!user) {
        res.status(404).json({
            msg: "user not found"
        })
    } else {
        res.json(user);
    }
}

const createData = async (req, res) => {
    const data = req.body
    const username = data.username;
    const password = data.password;
    const age = data.age;

    const allData = await User.findOne({ username: username })

    if (allData) {
        res.json("data already existed")
    } else {

        await User.create({
            username: username,
            password: password,
            age: age,
        })

        const alldata = await User.find();
        res.json({
            msg: "data created."

        })
    }
}

const upadateData = async (req, res) => {
    const id = req.params.id;
    const user = await User.updateOne({ _id: id }, req.body);
    const updateUser = await User.findOne({ _id: id });
    if (!updateUser) {
       return res.status(404).json({
            msg: "user not found"
        })
    }
    if (!user) {
        res.status(404).json({
            msg: "user not found"
        })
    }
    res.json({ msg: "user update sucessefully" });
}

const deleteData = async (req, res) => {
    const id = req.params.id;
    const user = await User.deleteOne({ _id: id });
    if (user.deletedCount === 0) {
        res.status(404).json({
            msg: "user not found"
        })
    } else {
        res.json({ msg: "user detete sucessfully" });
    }
}

module.exports = {getData,getSingleData,createData,upadateData,deleteData }
