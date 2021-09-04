const Events = require('../models/event')

class EventController {
    //Get/events
    event(req, res) {
        Events.find({}, function (err, Events) {
            if (!err) {
                res.send({ Events })
            }
            else {
                res.status(404).json({ error: "error!!!" })
            }
        }).lean()
    }
}

module.exports = new EventController;