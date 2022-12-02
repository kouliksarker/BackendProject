const AirlineService = require('../service/airlineService')

const createAirline = async (req, res) => {
    
    try {
        const airline = await AirlineService.createAirline(req.body)
        res.status(200).json({
            success: true,
            message: 'Successfully created airline',
            data: airline
        })
        
    } catch (err) {
        console.log("err:", err)
        res.status(500).json({
            success: false,
            message: 'something went wrong',
        })
    }
}

const getAirline = async (req, res) => {
    try {
        const airline = await AirlineService.getAirline(req.params.name)
        res.status(200).json({
            success: true,
            message: 'Successfully fetched airline',
            data: airline
        })
        
    } catch (err) {
        console.log("err:", err)
        res.status(500).json({
            success: false,
            message: 'something went wrong',
        })
    }
}

const getAllAirlines = async (req, res) => {
    try {
        const airline = await AirlineService.getAllAirlines()
        res.status(200).json({
            success: true,
            message: 'Successfully fetched all airlines',
            data: airline
        })
        
    } catch (err) {
        console.log("err:", err)
        res.status(500).json({
            success: false,
            message: 'something went wrong',
        })
    }
}

const destroyAirline = async (req, res) => {
    try {
        const airline = await AirlineService.destroyAirline(req.params.name)
        res.status(200).json({
            success: true,
            message: 'Successfully deleted airline',
            data: airline
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
    createAirline,
    getAirline,
    getAllAirlines,
    destroyAirline
}