const FlightService = require('../service/flightService')

const createFlight = async (req, res) => {
    
    try {
        const Flight = await FlightService.createflight(req.body)
        res.status(200).json({
            success: true,
            message: 'Successfully created Flight',
            data: Flight
        })
        
    } catch (err) {
        console.log("err:", err)
        res.status(500).json({
            success: false,
            message: 'something went wrong',
        })
    }
}

const getFlight = async (req, res) => {
    try {
        const Flight = await FlightService.getFlight(req.params.flightNumber)
        res.status(200).json({
            success: true,
            message: 'Successfully fetched Flight',
            data: Flight
        })
        
    } catch (err) {
        console.log("err:", err)
        res.status(500).json({
            success: false,
            message: 'something went wrong',
        })
    }
}

const getAllFlights = async (req, res) => {
    try {
        const Flight = await FlightService.getAllFlights(req.query)
        res.status(200).json({
            success: true,
            message: 'Successfully fetched all Flights',
            data: Flight
        })
        
    } catch (err) {
        console.log("err:", err)
        res.status(500).json({
            success: false,
            message: 'something went wrong',
        })
    }
}

const destroyFlight = async (req, res) => {
    try {
        const Flight = await FlightService.destroyFlight(req.query.flightNumber)
        res.status(200).json({
            success: true,
            message: 'Successfully deleted Flight',
            data: Flight
        })
        
    } catch (err) {
        console.log("err:", err)
        res.status(500).json({
            success: false,
            message: 'something went wrong',
        })
    }
}

module.exports = {
    createFlight,
    getFlight,
    getAllFlights,
    destroyFlight
}