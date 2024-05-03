const dbLayer = require( '../models/booking' );

const booking = {}

booking.getAllbookings=()=>{
    return dbLayer.getAllBookings();
}

booking.insertNewBooking = (data) =>{
    return dbLayer.insertNewBooking(data);
}

module.exports = booking;