const collection = require('../Utilities/connection');
const userRating = {};

userRating.getAllEvents=()=>{
    return collection.getCollection().then((users)=>{
        return collection.getUserRatingCollection().then((userRating)=>{
            return userRating.find({}).populate('reviewerId').populate('userId').then((results)=>{
                return results;
            })
        })
    })
}

userRating.insertNewRating=(data)=>{
    return collection.getUserRatingCollection().then((userRating)=>{
        return userRating.insertMany([data]).then((results)=>{
            return results;
        })
    })
}

module.exports = userRating;