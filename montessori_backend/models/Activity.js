const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema(
    {
        schooleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SchooleRegistration",
            required: true,
        },
        classId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class",
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
        },
        startDate: {
            type: String,
            required: true,
        },
        endDate: {
            type: String,
            required: true,
        },
       
        description: {
            type: String,
            required: true,
        },
        activityName: {
            type: String,
            required: true,
        },
   
     },
    {
        timestamps: true,
    }
);

const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);
module.exports = Activity;