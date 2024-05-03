const collection = require('../Utilities/connection');
const eventRating = {};

eventRating.getAllEventRatings = () => {
    return collection.getCollection().then((users) => {
        return collection.getEventCollection().then((events) => {
            return collection.getEventRatingCollection().then((eventRating) => {
                return eventRating.find({}).populate('reviewerId').populate('eventId').then((results) => {
                    return results;
                })
            })
        })

    })
}

eventRating.insertNewRating=(data)=>{
    return collection.getEventRatingCollection().then((eventRating)=>{
        return eventRating.insertMany([data]).then((results)=>{
            return results;
        })
    })
}

module.exports = eventRating;