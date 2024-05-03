const express = require('express');
const routing = express.Router();
const service = require('../service/user');

// To verify the credentials of user
routing.post(
    '/login',
    (req, res, next) => {
        const uEmail = req.body.email;
        const uPass = req.body.password;
        // Console.log(uEmail,uPass)

        service.loginUser(
            uEmail.toLowerCase(),
            uPass
        ).then(item => {
            // Console.log( item )
            res.json(item);
        }).
            catch(err => {
                next(err);
            });
    }
);


routing.put(
    '/register-new-user',
    (req, res, next) => {
        const uEmail = req.body.email;
        const uPass = req.body.password;
        const uName = req.body.name;
        console.log('Inside controller',uEmail,uPass);

        service.registerUser(
            uName,
            uEmail,
            uPass
        ).then(item => {
            console.log( item )
            res.json(item);
        }).
            catch(err => {
                next(err);
            });
    }
);

routing.post(
    '/update-existing-user',
    (req, res, next) => {
        const email = req.body.email;
        const name = req.body.name;
        const phoneNumber = req.body.phoneNumber;
        const profilePhoto = req.body.profilePhoto;
        const about = req.body.about;
        const interests = req.body.interests;
        const skillLevels = req.body.skillLevels;
        const address = req.body.address;
        const state = req.body.state;
        const city = req.body.city;
        const country = req.body.country;
        const zipcode = req.body.zipcode;
        console.log('Inside controller',uEmail,uPass);

        service.updateUserData(
            name, email, phoneNumber, profilePhoto, about, interests, skillLevels, address, state, city, country, zipcode
        ).then(item => {
            console.log( item )
            res.json(item);
        }).
            catch(err => {
                next(err);
            });
    }
);
module.exports = routing;