const ReviewService = require('../service/reviewService')

const createReview = async (req, res) => {
    
    try {
        const review = await ReviewService.createReview(req.body)
        res.status(200).json({
            success: true,
            message: 'Successfully created Review',
            data: review
        })
        
    } catch (err) {
        console.log("err:", err)
        res.status(500).json({
            success: false,
            message: 'something went wrong',
        })
    }
}

const getReview = async (req, res) => {
    try {
        const Review = await ReviewService.getReview(req.params.userId, req.params.flightId )
        res.status(200).json({
            success: true,
            message: 'Successfully fetched Review',
            data: Review
        })
        
    } catch (err) {
        console.log("err:", err)
        res.status(500).json({
            success: false,
            message: 'something went wrong',
        })
    }
}

const getAllReviews = async (req, res) => {
    try {
        const review = await ReviewService.getAllReviews(req.params.flightId)
        res.status(200).json({
            success: true,
            message: 'Successfully fetched all Reviews',
            data: review
        })
        
    } catch (err) {
        console.log("err:", err)
        res.status(500).json({
            success: false,
            message: 'something went wrong',
        })
    }
}

const destroyReview = async (req, res) => {
    try {
        const Review = await ReviewService.destroyReview(req.params.id)
        res.status(200).json({
            success: true,
            message: 'Successfully deleted Review',
            data: Review
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
    createReview,
    getReview,
    getAllReviews,
    destroyReview
}