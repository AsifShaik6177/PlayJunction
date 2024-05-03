const dbLayer = require( '../models/user' );

const user = {}

// Verfying the credentials of user
user.loginUser = ( uEmail, pass ) => {
    return dbLayer.userLogin(
 uEmail,
pass 
).then( response => {
    console.log(response);
        return response;
    } )
}

user.registerUser = (name, email, password) =>{
    console.log('inside service');
    return dbLayer.registerUser(name,email,password).then(x=>{
        return x;
    })
}

user.updateUserData = (name, email, phoneNumber, profilePhoto, about, interests, skillLevels, address, state, city, country, zipcode) => {
    return dbLayer.updateUserData(name, email, phoneNumber, profilePhoto, about, interests, skillLevels, address, state, city, country, zipcode).then(x => {
        return x;
    });
}



module.exports = user;