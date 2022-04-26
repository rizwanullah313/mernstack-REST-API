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
            email: user.email,
            token: generateToken(user._id)
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
            token: generateToken(user._id)

        })
    }else{
       res.status(400)
       throw new Error('Invalid Credentials')
    }

   // res.json({message: 'Login User'})
})


// Get User Data GET and private
const getme = asyncHandler(async (req, res) => {
    //res.json({message: 'Get User Data'})

    const {_id,name,email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email,
    })
})


// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET,{
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,loginUser, getme
}