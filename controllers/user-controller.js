const {User, Thoughts} = require('../models')

const userController = {

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
},

addUser({body}, res){
    User.create(body)
    .then(data => res.json(data))
    .catch(error => res.json(error));

},

getUsersById({params},res){
    User.findOne({_id: params.id})
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

},

deleteUser( {params}, res){
    User.findOneAndDelete({_id:params.id})
    .then(data=>{res.json(data)})
    .catch(error => {
        console.log(error)
        res.sendStatus(400)
    })
},


deleteFriend({params}, res){
    User.findOneAndUpdate(
        {_id: params.friendId}, 
        { $pull: { friends: params.userId } },
        { new: true } )
        .then(data => {
            if (!data) {
                res.status(404).json({ message: 'No friend with this id!' });
                return;
            } res.json(data)})
             
        
},


}

module.exports = userController