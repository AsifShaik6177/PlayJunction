const express = require('express');
const routing = express.Router();
const service = require('../service/userrating');

// To verify the credentials of user
routing.get(
    '/get-all-user-ratings',
    (req, res, next) => {

        service.getAllUser().then(item => {
            // Console.log( item )
            res.json(item);
        }).
            catch(err => {
                next(err);
            });
    }
);

routing.put(
    '/register-new-user-rating',
    (req, res, next) => {
        const userId = req.body.userId;
        const reviewerId = req.body.reviewerId;
        const review = req.body.review;
        const reviewTitle = req.body.reviewTitle;
        const reviewDetail = req.body.reviewDetail;
        const gallery = req.body.gallery;
        const reviewDate = req.body.reviewDate;

        console.log('Inside controller');

        service.insertEventRating({
            "userId": userId,
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