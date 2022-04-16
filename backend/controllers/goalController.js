const getGoals = (req, res) => {
    res.status(200).json({message: 'Get Goals'})
}
const setGoals = (req, res) => {
    //console.log(req.body);
    if(!req.body.text)
    {
        //res.status(400).json({message: 'Please Add A Text Field'})
        res.status(400)
        throw new Error('Please Add A Text Field ok')
    }
    res.status(200).json({message: 'Set Goals'})
}
const updateGoals = (req, res) => {
    res.status(200).json({message: `Update Goals ${req.params.id}`})
}
const deleteGoals = (req, res) => {
    res.status(200).json({message: `Delete Goals ${req.params.id}`})
}

module.exports = {
    getGoals,setGoals,updateGoals,deleteGoals
}