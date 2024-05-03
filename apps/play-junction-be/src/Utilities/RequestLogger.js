const fs = require( 'fs' );

//Log the request method, date, time and path
const requestLogger = ( req, res, next ) => {
    const logMessage = "" + new Date() + " " + req.method + " " + req.url + "\n"; 
    fs.appendFile( 'RequestLogger.txt', logMessage , ( err ) => {
        if ( err )return next( err );
    } );
    next();
}
module.exports = requestLogger;