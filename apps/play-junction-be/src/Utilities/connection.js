
// const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const validators = require('./validators');
const commonObjects = require('../models/common');

// const uri = "mongodb+srv://invictusdigisolutions:liTWxZMyHFY1gnxp@play-junction.mgumpl8.mongodb.net/?retryWrites=true&w=majority&appName=play-junction";
const uri = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.3"

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

// mongoose.connect(uri)
//   .then(() => console.log('MongoDB connected successfully'))
//   .catch(err => console.error(err));

const PreferencesSchema =  mongoose.Schema({
  sportName: {
    type: String,
    required: true
  },
  expertiseLevel: {
    type: Number,
    required: true,
    enum: Object.values(commonObjects.expertiseLevel)
  }
});

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       trim: true,
//       lowercase: true,
//       validate(value) {
//         if (!validators.isEmail(value)) {
//           throw new Error('Invalid email');
//         }
//       },
//     },
//     password: {
//       type: String,
//       required: true,
//       trim: true,
//       minlength: 8,
//       private: true, // used by the toJSON plugin
//     },
//     gender: {
//       type: String,
//       enum: Object.keys(commonObjects.genderOptions),
//     },
//     profileStatus: {
//       type: String,
//       enum: Object.keys(commonObjects.profileStatuses),
//       default: 'Inprogress',
//     },
//     isEmailVerified: {
//       type: Boolean,
//       default: false,
//     },
//     preferences: {
//       type: [PreferencesSchema],
//       default:[]
//     }
//   },
//   {
//     timestamps: true,
//   });

  const userSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String
    },
    gender: {
      type: String,
      enum: Object.keys(commonObjects.genderOptions),
    },
    profileStatus: {
      type: String,
      enum: Object.keys(commonObjects.profileStatuses),
      default: 'Inprogress',
    },
    interests: {
      type: String,
    },
    about: {
      type: String,
    },
    skillLevels: {
      type: [new mongoose.Schema({
        // Key is the sport name, value is the skill level (e.g., beginner, intermediate, advanced)
        sportName: {
          type: String
        },
        skillLevel: {
          type: String
        }
      }, { _id: false })]
    },
    address:{
      type:String
    },
    state:{
      type:String
    },
    city:{
      type:String
    },
    country:{
      type:String
    },
    zipcode:{
      type:String
    },
    profilePhoto: {
      type: String
    }
  },
  {
    timestamps: true,
  });

const eventSchema = new mongoose.Schema({
  eventId: {
    type: String,
    required: true,
    unique: true

  },
  sportName: {
    type: String,
    required: true
  },
  eventName: {
    type: String,
    required: true
  },
  venuePrice: {
    type: String,
    required: true
  },
  maxGuests: {
    type: String,
    required: true
  },
  availability: {
    type: [String],
    required: true
  },
  overview: {
    type: String,
    required: true
  },
  includes: {
    type: String,
  },
  venueRules: {
    type: String,
  },
  amneties: {
    type: String
  },
  gallery: {
    type: [String]
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  country: {
    type: String
  },
  participants: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Users'
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  }
}, { timestamps: true });

const eventReviewSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Events'
  },
  reviewerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  review: {
    type: Number,
    required: true
  },
  reviewTitle: {
    type: String,
    required: true
  },
  reviewDetail: {
    type: String,
  },
  gallery: {
    type: [String]
  },
  reviewDate:{
    type: String
  }
}, { timestamps: true });

const userReviewSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  reviewerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  },
  sportName: {
    type: String
  },
  review: {
    type: Number,
    required: true
  },
  reviewTitle: {
    type: String,
    required: true
  },
  reviewDetail: {
    type: String,
  },
  gallery: {
    type: [String]
  },
  reviewDate:{
    type: String
  }
}, { timestamps: true });

const bookingSchema = new mongoose.Schema({
  bookingId:{
    type: String,
    required: true
  },
  eventId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Events',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  transactionId: {
    type: String,
    required: true
  },
  attendance: {
    type: Boolean,
  },
  bookingTime: {
    type: String,
  },
  scored: {
    type: Number,
  },
  victory: {
    type: Boolean
  },
  bookingStatus: {
    type: String
  }
}, { timestamps: true });

const connection = {}


// Returns model object of "Users" collection
connection.getCollection = () => {
  // Establish connection and return model as promise
  console.log('a');
  return mongoose.connect(
    uri
  ).then(database => {
    return database.model(
      'Users',
      userSchema
    )
  }).
    catch(() => {
      const err = new Error("Could not connect to the database");

      err.status = 500;
      throw err;
    });
}

// Returns model object of "Users" collection
connection.getEventCollection = () => {
  // Establish connection and return model as promise
  console.log('a');
  return mongoose.connect(
    uri
  ).then(database => {
    return database.model(
      'Events',
      eventSchema
    )
  }).
    catch(() => {
      const err = new Error("Could not connect to the database");

      err.status = 500;
      throw err;
    });
}

connection.getEventRatingCollection = () => {
  // Establish connection and return model as promise
  console.log('a');
  return mongoose.connect(
    uri
  ).then(database => {
    return database.model(
      'EventRating',
      eventReviewSchema
    )
  }).
    catch(() => {
      const err = new Error("Could not connect to the database");

      err.status = 500;
      throw err;
    });
}

connection.getUserRatingCollection = () => {
  // Establish connection and return model as promise
  console.log('a');
  return mongoose.connect(
    uri
  ).then(database => {
    return database.model(
      'UserRating',
      userReviewSchema``
    )
  }).
    catch(() => {
      const err = new Error("Could not connect to the database");

      err.status = 500;
      throw err;
    });
}

connection.getBookingCollection = () => {
  // Establish connection and return model as promise
  console.log('a');
  return mongoose.connect(
    uri
  ).then(database => {
    return database.model(
      'Booking',
      bookingSchema
    )
  }).
    catch(() => {
      const err = new Error("Could not connect to the database");

      err.status = 500;
      throw err;
    });
}

module.exports = connection;
