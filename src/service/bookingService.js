const Booking = require('../models/booking')

const createBooking = async (data) => {
    try{
        const newBooking = {
            id: data.id,
            flight: data.flight,
            user: data.user,
            status: data.status
        }
        const response = await new Booking(newBooking).save()
        return response

    } catch (err){
        console.log("err:", err)
    }
}


const cancelBooking = async (id) => {
    try{
        const response = await Booking.findOneAndUpdate({id: id}, {status: 'cancelled'})
        return response
    } catch (err){
        console.log("err:", err)
    }
}

const boardingPass = async (id) => {
    try{
        const response = await Booking.findOne({ id: id })
            .populate('flight')
            .populate('user')
            .exec()
        return response
    } catch (err){
        console.log("err:", err)
    }
}



module.exports = {
    createBooking,
    cancelBooking,
    boardingPass,
}