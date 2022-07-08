const router = require('express').Router()

const{
    getThoughts,
    getThoughtbyId,
    addThought,
    updateThought,
    deleteThought,
    addReaction,

} = require('../../controllers/thought-contoller')


router
    .route('/')
    .get(getThoughts)
    .post(addThought
        )

router
    .route('/:id')
    .get(getThoughtbyId)
    .put(updateThought)
    .delete(deleteThought)

    router.route('/:thoughtsId/reactions').post(addReaction)


    module.exports = router