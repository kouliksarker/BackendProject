const { application } = require('express')
const express = require('express')//returns a function
const app = express() 
const apiRouter = require("./src/routes/index")
app.use("/api", apiRouter)

app.get('/', (req, res) => {
    res.send({
        success: true,
        message: "Successfully hitting the api",
        data: {}
    })
})

app.listen(3000, () => {
    console.log("Server Started Successfully")
})