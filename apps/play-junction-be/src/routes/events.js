const express = require('express');
const routing = express.Router();
const service = require('../service/events');

// To verify the credentials of user
routing.get(
    '/get-all-events',
    (req, res, next) => {

        service.getAllEvents().then(item => {
            // Console.log( item )
            res.json(item);
        }).
            catch(err => {
                next(err);
            });
    }
);

routing.post(
    '/get-event',
    (req, res, next) => {
        const eventId = req.body.eventId;
        service.getEventById(eventId).then(item => {
            // Console.log( item )
            res.json(item);
        }).
            catch(err => {
                next(err);
            });
    }
);

routing.put(
    '/register-new-event',
    (req, res, next) => {

        console.log(req.body);
        const eventId = req.body.eventId;
        const sportName = req.body.sportName;
        const eventName = req.body.eventName;
        const venuePrice = req.body.venuePrice;
        const maxGuests = req.body.maxGuests;
        const availability = req.body.availability;
        const overview = req.body.overview;
        const includes = req.body.includes;
        const venueRules = req.body.venueRules;
        const amneties = req.body.amneties;
        const gallery = req.body.gallery;
        const address = req.body.address;
        const state = req.body.state;
        const city = req.body.city;
        const country = req.body.country;
        const zipcode = req.body.zipcode;
        const participants = req.body.participants;
        const postedBy = req.body.postedBy;

        console.log('Inside controller');

        service.registerNewEvent({
            "eventId": eventId,
            "sportName": sportName,
            "eventName": eventName,
            "venuePrice": venuePrice,
            "maxGuests": maxGuests,
            "availability": availability,
            "overview": overview,
            "includes": includes,
            "venueRules": venueRules,
            "amneties": amneties,
            "gallery": gallery,
            "address": address,
            "state": state,
            "city": city,
            "country": country,
            "zipcode": zipcode,
            "participants": participants,
            "postedBy": postedBy
        }).then(item => {
            console.log(item)
            res.json(item);
        }).
            catch(err => {
                next(err);
            });
    }
);

routing.post(
    '/update-existing-event',
    (req, res, next) => {
        const eventId = req.body.eventId;
        const sportName = req.body.sportName;
        const eventName = req.body.eventName;
        const venuePrice = req.body.venuePrice;
        const maxGuests = req.body.maxGuests;
        const availability = req.body.availability;
        const overview = req.body.overview;
        const includes = req.body.includes;
        const venueRules = req.body.venueRules;
        const amneties = req.body.amneties;
        const gallery = req.body.gallery;
        const address = req.body.address;
        const state = req.body.state;
        const city = req.body.city;
        const country = req.body.country;
        const zipcode = req.body.zipcode;
        const participants = req.body.participants;
        const postedBy = req.body.postedBy;
        console.log('Inside controller', uEmail, uPass);

        service.updateEvent({
            "eventId": eventId,
            "sportName": sportName,
            "eventName": eventName,
            "venuePrice": venuePrice,
            "maxGuests": maxGuests,
            "availability": availability,
            "overview": overview,
            "includes": includes,
            "venueRules": venueRules,
            "amneties": amneties,
            "gallery": gallery,
            "address": address,
            "state": state,
            "city": city,
            "country": country,
            "zipcode": zipcode,
            "participants": participants,
            "postedBy": postedBy
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