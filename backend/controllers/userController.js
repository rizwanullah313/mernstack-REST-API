// Register New User
// POST Request and this is public

const registerUser = (req, res) => {
    res.json({message: 'Register User'})
}

// for Authentication also POST and Public
const loginUser = (req, res) => {
    res.json({message: 'Login User'})
}


// Get User Data GET 
const getme = (req, res) => {
    res.json({message: 'Get User Data'})
}



module.exports = {
    registerUser,loginUser, getme
}