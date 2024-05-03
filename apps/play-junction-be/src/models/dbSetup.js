const collection = require('../Utilities/connection');
const commonObjects = require('./common');

const userData = [
{
    userId: 'UID1',
    email: "jane.smith@example.com",
    password: "SecurePassw0rd",
    name: "Jane Smith",
    gender: 'Female',
    phoneNumber:"9123456789",
    profileStatus: 'Completed',
    interests: "Yoga, Hiking",
    about: "Enjoying outdoor activities and staying active!",
    skillLevels: [
      { sportName: "Tennis", skillLevel: "Advanced" },
      { sportName: "Volleyball", skillLevel: "Intermediate" }
    ]
  },
  {
    userId: 'UID2', // Generate a new ObjectID
    email: "john.doe@example.com",
    password: "SecurePassw0rd",
    name: "John Doe",
    gender: 'Male',
    phoneNumber:"9123456789",
    profileStatus: 'Inprogress',
    interests: "Running, Team Sports",
    about: "Enthusiastic athlete looking to connect with others!",
    skillLevels: [
      { sportName: "Basketball", skillLevel: "Intermediate" },
      { sportName: "Soccer", skillLevel: "Beginner" }
    ]
  }
];

const create = {}

create.setupDB = () => {
    return collection.getCollection().then(userColl => {
        return userColl.deleteMany().then(() => {
            return userColl.insertMany(userData).then(result => {
                if (result && result.length > 0) return result.length
                else return null
            });
        });
    });
}

module.exports = create
