const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const Events = new Schema({
    creatArt: { type: Date, default: Date.now },
    updateArt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Events", Events, "posts")