const {User, Thoughts} = require('../models')

getAllUsers({req},res){
    User.find({})
    .populate({
        path: 'thoughts',
        select: ('-__v')
    })
    .select('-__v')
    .then(data => res.json(data))
    .catch(error => {
        console.log(error)
        res.sendStatus(400)
    })



module.exports = userController