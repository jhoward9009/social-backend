const router = require('express').Router()
const router = require('express').Router()
const userRoute = require('./user-routes')
const thoughtsRoute = require('./thoughts-route')

router.use('/api/user', userRoute)
router.use('/api/thoughts', thoughtsRoute)



router.use((req, res) => {
    res.status(404).send('<h1>ERROR ERROR ERROR!</h1>');
  });

module.exports = router