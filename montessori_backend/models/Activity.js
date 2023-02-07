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
        
        academicYear : {
            type: String,
            required: true,
        },
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },
        subActivityId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubActivity",
            required: true,
        },
        activityId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ActivityTabel",
            required: true,
        },
        remarks:{
            type: String,
            required: true,
        },
        authorizedPerson:{
            type: String,
            required: true,
        },
        key:{
            type: String,
            required: true,
        }
     },
    {
        timestamps: true,
    }
);

const Activity = mongoose.models.Activity || mongoose.model('Activity', activitySchema);
module.exports = Activity;