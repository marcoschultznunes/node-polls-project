const express = require('express')
const router = express.Router()

const pollsController = require('../controllers/polls')

router.get('/', pollsController.listPolls)
router.get('/view/:id', pollsController.readPoll)
router.post('/vote/:id', pollsController.votePoll)

router.get('/edit/:id', pollsController.editPoll)
router.get('/new', pollsController.newPoll)
router.post('/save/:id', pollsController.savePoll)
router.post('/delete/:id', pollsController.deletePoll)

module.exports = router
