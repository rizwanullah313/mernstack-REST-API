const getGoals = (req, res) => {
    res.status(200).json({message: 'Get Goals'})
}
const setGoals = (req, res) => {
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