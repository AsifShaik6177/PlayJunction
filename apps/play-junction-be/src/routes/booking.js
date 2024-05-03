const express = require('express');
const routing = express.Router();
const service = require('../service/booking');

// To verify the credentials of user
routing.get(
    '/get-all-bookings',
    (req, res, next) => {

        service.getAllbookings().then(item => {
            // Console.log( item )
            res.json(item);
        }).
            catch(err => {
                next(err);
            });
    }
);

routing.put(
    '/register-new-booking',
    (req, res, next) => {
        const eventId = req.body.eventId;
        const reviewerId = req.body.reviewerId;
        const review = req.body.review;
        const reviewTitle = req.body.reviewTitle;
        const reviewDetail = req.body.reviewDetail;
        const gallery = req.body.gallery;
        const reviewDate = req.body.reviewDate;

        console.log('Inside controller');

        service.insertNewBooking({
            "eventId": eventId,
            "reviewerId": reviewerId,
            "review": review,
            "reviewTitle": reviewTitle,
            "reviewDetail": reviewDetail,
            "gallery": gallery,
            "reviewDate": reviewDate
        }).then(item => {
            console.log(item)
            res.json(item);
        }).
            catch(err => {
                next(err);
            });
    }
);

module.exports = routing;