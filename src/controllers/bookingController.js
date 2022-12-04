const BookingService = require('../service/bookingService')

const createBooking = async (req, res) => {
    
    try {
        const Booking = await BookingService.createBooking(req.body)
        res.status(200).json({
            success: true,
            message: 'Successfully created Booking',
            data: Booking
        })
        
    } catch (err) {
        console.log("err:", err)
        res.status(500).json({
            success: false,
            message: 'something went wrong',
        })
    }
}

const getBoardingPass = async (req, res) => {
    try {
        const boardingPass = await BookingService.boardingPass(req.params.id)
        res.status(200).json({
            success: true,
            message: 'Successfully fetched Boarding Pass',
            data: boardingPass
        })
        
    } catch (err) {
        console.log("err:", err)
        res.status(500).json({
            success: false,
            message: 'something went wrong',
        })
    }
}

const cancelBooking = async (req, res) => {
    try {
        const Booking = await BookingService.cancelBooking(req.params.id)
        res.status(200).json({
            success: true,
            message: 'Successfully cancelled Booking',
            data: Booking
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
    createBooking,
    getBoardingPass,
    cancelBooking
}