const express = require('express');
const router = express.Router();

const events = require('../controllers/EventController')
router.get('/events', events.event)
router.get('/', events.event);

module.exports = router;