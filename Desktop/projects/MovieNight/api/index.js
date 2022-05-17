const router = require('express').Router()

router.get('/health', (req, res, next) => {
  res.send('API is healthy and ready to go!')
})
router.use('/auth', require('./auth'))

module.exports = router
