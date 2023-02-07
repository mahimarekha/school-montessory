const mongoose = require('mongoose');
const calenderEventsSchema = new mongoose.Schema(
    {
        schooleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SchooleRegistration",
            required: true,
        },
       
        teacherId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Teacher",
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
        eventName:{
            type: String,
            required: true,
        }
     },
    {
        timestamps: true,
    }
);

const CalelnderEvents = mongoose.models.CalelnderEvents || mongoose.model('CalelnderEvents', calenderEventsSchema);
module.exports = CalelnderEvents;