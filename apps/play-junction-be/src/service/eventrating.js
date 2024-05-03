const dbLayer = require( '../models/eventrating' );

const eventRatings = {}

eventRatings.getAllEventRatings=()=>{
    return dbLayer.getAllEventRatings();
}

eventRatings.insertEventRating = (data) =>{
    return dbLayer.insertNewRating(data);
}

module.exports = eventRatings;