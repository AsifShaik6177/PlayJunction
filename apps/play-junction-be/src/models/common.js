const commonObjects = {}

commonObjects.genderOptions = {
    Male: { value: 'male', label: 'Male' },
    Female: { value: 'female', label: 'Female' },
    // Add more options like 'OTHER', 'NON_BINARY' with labels if needed
};

commonObjects.profileStatuses = {
    Completed: {value: 'Completed'},
    Inprogress: {value: 'Inprogress'}
};

commonObjects.expertiseLevel = {
    Novice: 1,
    Beginner: 2,
    Intermediate: 3,
    Advanced: 4,
    Expert: 5
};

module.exports = commonObjects;