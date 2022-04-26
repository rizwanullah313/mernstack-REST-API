const express =  require('express')
const router = express.Router()
const {getGoals,setGoals,updateGoals,deleteGoals} = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')


router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').put(protect, updateGoals).delete(protect, deleteGoals)

// router.get('/',getGoals)
// router.post('/',setGoals)
// router.put('/:id',updateGoals)
// router.delete('/:id',deleteGoals)

// router.get('/', (req, res) => {
//     //res.send('Get Goals')
//     res.status(200).json({message: 'Get Goals'})
// })

// router.post('/', (req, res) => {
//     res.status(200).json({message: 'Set Goal'})
// })

// router.put('/:id', (req, res) => {
//     res.status(200).json({message: `Update Goal ${req.params.id}`})
// })

// router.delete('/:id', (req, res) => {
//     res.status(200).json({message: `Delete Goal ${req.params.id}`})
// })
module.exports = router