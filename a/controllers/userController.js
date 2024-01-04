const userModel = require("../models/userModel")
const bcrypt = require("bcryptjs")


const signup = async (req, res) => {
    const { name, email, password } = req.body;

    let hashedPassword = bcrypt.hashSync(password) 
    const user = new userModel({ name, email, password: hashedPassword })
    let existinguser;
    try {
        existinguser = await userModel.findOne({ email })
        await user.save()
    } catch (error) {
        console.log(error)
    }
    if (existinguser) {
        return res.status(400).json({ message: "email already exists. Login instead." })
    }
    return res.status(201).json({ message: user })
}

const login = async (req, res) => {
    const {email, password} = req.body;
    let existingUser;
    try {
        existingUser = await userModel.findOne({email})
    } catch (error) {
        console.log(error)
    }
    if(!existingUser){
        return res.status(400).json({message:"User not found. Sign in."})
    }
    let setpassword = bcrypt.compareSync(password, existingUser.password)
    if(!setpassword){
        return res.status(400).json({message:"Invaled gmail / password"})
    }
    return res.status(200).json({message:"You logged in"})

}


exports.signup = signup
exports.login = login