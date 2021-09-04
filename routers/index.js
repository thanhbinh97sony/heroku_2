const newsRouter = require('./event')

function route (app) {

app.use('/',newsRouter);

}

module.exports = route;