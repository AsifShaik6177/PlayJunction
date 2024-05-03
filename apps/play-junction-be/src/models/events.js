const collection = require('../Utilities/connection');
const events = {};
// const eventsCollection = await collection.getEventCollection();

// Verify the user credentials and modify the last logout
events.getEventsList = () => {
    return collection.getCollection().then((users)=>{
        
        return collection.getEventCollection().then((events) => {
            return events.find({}).populate('participants').populate('postedBy').then(data => {
                // const reviews = 0;
                // const avgRating = 0;
                // data.forEach(async(x)=>(
                //     await collection.getEventRatingCollection().then((eventReviewColl)=>{
                //         return eventReviewColl.find({'eventId':x.eventId}).then(x=>{

                //         })
                        return data;
            });
        });

    })
}

// Verify the user credentials and modify the last logout
events.getEventById = (eventId) => {
    return collection.getCollection().then((users)=>{
        
        return collection.getEventCollection().then((events) => {
            return events.findOne({'eventId': eventId}).populate('participants').populate('postedBy').then(data => {
                // const reviews = 0;
                // const avgRating = 0;
                // data.forEach(async(x)=>(
                //     await collection.getEventRatingCollection().then((eventReviewColl)=>{
                //         return eventReviewColl.find({'eventId':x.eventId}).then(x=>{

                //         })
                        return data;
            });
        });

    })
}

events.registerEvent = (data) => {
    console.log(data);
    return collection.getEventCollection().then((eventColl) => {
        console.log('connected');
        return eventColl.find({}).then(events=>{
            var eventId = 0;
            if(events.length>0){
                events.forEach(event=>{
                    var id = Number(event.eventId.slice(3));
                    if(id>eventId){
                        eventId = id;
                    }
                });
            }
            eventId = Number(eventId)+1;
            eventId = 'EID'+Number(eventId);
            console.log(eventId);
            data['eventId']= eventId;
            return eventColl.insertMany([data]).then(data => {
                if(data){
                    return true;
                }
             })
        });

    })
}

events.updateEvent = (data) =>{
    return collection.getEventCollection().then((eventColl) => {
        return eventColl.find({"eventId": data.eventId}).then(events=>{
            return eventColl.updateOne({"eventId": eventId},
            {"$set": data}).then(data => {
                if(data){
                    return true;
                }
             })
        });

    })
}

module.exports = events;

// async function getAllEventsWithReviews() {
//     const events = await eventsCollection.aggregate([
//         {
//             $lookup: {
//                 from: 'EventReviews', // Reference the eventReviewSchema collection
//                 localField: '_id', // Local field in Events schema (eventId)
//                 foreignField: 'eventId', // Foreign field in EventReviews schema (eventId)
//                 as: 'reviews' // Name for the joined reviews array
//             }
//         },
//         {
//             $unwind: '$reviews' // Deconstruct the reviews array into separate objects
//         },
//         {
//             $group: {
//                 _id: '$_id', // Group by event ID
//                 // ... other event details (venuePrice, maxGuests, etc.)
//                 averageRating: { $avg: '$reviews.review' }, // Calculate average rating
//                 reviewCount: { $sum: 1 }, // Count the number of reviews
//                 // ... other desired event details
//             }
//         },
//         {
//             $project: {
//                 _id: 1, // Exclude the default _id field
//                 eventId: 1,
//                 sportName: 1,
//                 eventName: 1,
//                 venuePrice: 1,
//                 maxGuests: 1,
//                 availability: 1,
//                 overview: 1,
//                 includes: 1,
//                 venueRules: 1,
//                 amneties: 1,
//                 gallery: 1,
//                 address: 1,
//                 city: 1,
//                 country: 1,
//                 participants: 1,
//                 postedBy: 1,
//                 // ... other event details
//                 averageRating: { $toString: "$averageRating" }, // Convert averageRating to string (optional)
//                 reviewCount: 1,
//                 // ... other desired event details
//             }
//         }
//     ]);
//     return await events;
// }