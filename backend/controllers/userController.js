const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')



// Register New User
// POST Request and this is public

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body 

    if(!name || !email || !password)
    {
      res.status(400)
      throw new Error('Please Add All Fileds')
    }

    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User Already Exists')
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }

    //res.json({message: 'Register User'})
})

// for Authentication also POST and Public
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    
    // Check for user Email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
        })
    }else{
       res.status(400)
       throw new Error('Invalid Credentials')
    }

   // res.json({message: 'Login User'})
})


// Get User Data GET 
const getme = asyncHandler(async (req, res) => {
    res.json({message: 'Get User Data'})
})



module.exports = {
    registerUser,loginUser, getme
}