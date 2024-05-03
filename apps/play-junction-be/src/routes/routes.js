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
            uEmail,
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

module.exports = routing;