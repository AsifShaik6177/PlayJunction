const collection = require('../Utilities/connection');
const booking = {};

booking.getAllBookings=()=>{
    return collection.getBookingCollection().then((bookingModel)=>{
        return bookingModel.find({}).then((results)=>{
            return results;
        })
    })
}

booking.insertNewBooking=(data)=>{
    return collection.getBookingCollection().then((bookingModel)=>{
        return bookingModel.insertMany([data]).then((results)=>{
            return results;
        })
    })
}

module.exports = booking;