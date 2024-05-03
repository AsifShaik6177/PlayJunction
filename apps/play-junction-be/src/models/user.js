const collection = require('../Utilities/connection');
const user = {}

// Verify the user credentials and modify the last logout
user.userLogin = (uEmail, uPass) => {
    return collection.getCollection().then((userColl) => {
        return userColl.find({ "email": uEmail }).then(data => {
            if (data.length === 1) {
                if (uPass === data[0].password) {

                    var userData = JSON.parse(JSON.stringify(data[0]));
                    delete userData.password;
                    console.log(userData);
                    return userData;
                } else {
                    const err =
                        new Error("The password entered is incorrect!!");

                    err.status = 401;
                    throw err;

                }
            } else {
                const err =
                    new Error("You are not registered.Please register to login");

                err.status = 404;
                throw err;
            }
        })
    })
}

user.registerUser = (name, email, password) => {
    return collection.getCollection().then((userColl) => {
        return userColl.find({}).then(users=>{
            var userId = 0;
            users.forEach(user=>{
                var id = Number(user.userId.slice(3));
                if(id>userId){
                    userId = id;
                }
            });
            userId = Number(userId)+1;
            userId = 'UID'+Number(userId)+1;
            console.log(userId);
            return userColl.insertMany([{'userId':userId ,'name':name,'email':email.toLowerCase(),'password':password}]).then(data => {
                if(data){
                    return true;
                }
             })
        });

    })
}

user.updateUserData = (name, email, phoneNumber, profilePhoto, about, interests, skillLevels, address, state, city, country, zipcode) =>{
    return collection.getCollection().then((userColl) => {
        return userColl.find({"email": email}).then(users=>{
            return userColl.updateOne({"email": email},
            {"$set": {
                "name" : name,
                "phoneNumber" : phoneNumber,
                "profilePhoto" : profilePhoto,
                "about" : about,
                "interests" : interests,
                "skillLevels" : skillLevels,
                "address" : address,
                "state" : state,
                "city" : city,
                "country" : country,
                "zipcode" : zipcode
            }}).then(data => {
                if(data){
                    return true;
                }
             })
        });

    })
}

module.exports = user;