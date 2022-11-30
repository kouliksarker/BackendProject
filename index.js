const express = require('express')//returns a function
const bodyParser = require('body-parser')
const passport = require('passport')
const apiRouter = require("./src/routes/index")
const authRouter = require('./src/routes/authRoute')
const User = require('./src/models/user')
const { connect } = require('./src/config/database')
require('./src/util/auth')

const app = express() 

app.use(bodyParser.urlencoded({extended: false}))
app.use("/", authRouter)
app.use("/api", passport.authenticate('jwt', {session: false}), apiRouter) // every route starting with /api needs to be authenticated

app.use(function(err, req, res, next){
    res.status(err.status || 500)
    res.json({
        success: false,
        error: err
    })
})

app.listen(3000, async () => {
    await connect()
    console.log("Mongo db connected successfully")
    console.log("Server Started Successfully")
})