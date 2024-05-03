const dbLayer = require( '../models/userrating' );

const userRating = {}

userRating.getAllEventRatings=()=>{
    return dbLayer.getAllEventRatings();
}

userRating.insertEventRating = (data) =>{
    return dbLayer.insertNewRating(data);
}

module.exports = userRating;