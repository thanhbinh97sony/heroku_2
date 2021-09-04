// require libery
const express = require('express')
const handlebars = require('express-handlebars')
const methodOverride = require('method-override')
const jwt = require('jsonwebtoken')
const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

// require express
const route = require('./routers')
const app = express()

// require model-control-view
const connectDB = require('./config/db')

// import ENV
require('dotenv').config()
const port = process.env.PORT || 5000

connectDB()

// for parsing application/json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

route(app)

app.listen(port, () =>
    console.log('> Server is up and running on port : ' + port))
