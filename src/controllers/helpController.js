const helpDetails = (req, res) => {
    return res.status(200).send({
        success: true,
        message: "Successfully hitting the help api",
        data: {
            contact: "+910000000"
        }
    })
}

module.exports = {
    helpDetails
}