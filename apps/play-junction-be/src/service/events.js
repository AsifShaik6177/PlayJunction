const dbLayer = require( '../models/events' );

const events = {}

events.getAllEvents=()=>{
    return dbLayer.getEventsList();
}

events.getEventById=(eventId)=>{
    return dbLayer.getEventById(eventId);
}

events.registerNewEvent = (data) =>{
    return dbLayer.registerEvent(data);
}

events.updateEvent = () =>{
    return dbLayer.updateEvent(data);
}

module.exports = events;