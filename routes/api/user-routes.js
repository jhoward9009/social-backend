const router = require('express').Router()
const{
    getUsersById, 
    getAllUsers, 
    addUser,
    deleteUser, 
    deleteFriend 

} = require('../../controllers/user-controller')

router
    .route('/')
    .get(getAllUsers)

router.route('/:userId/friends/:friendId').delete(deleteFriend)
router
    .route('/:id')
    .get(getUsersById)
    .delete(deleteUser)

module.exports = router