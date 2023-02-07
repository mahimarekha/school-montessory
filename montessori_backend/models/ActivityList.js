const mongoose = require('mongoose');
const activityTabelSchema = new mongoose.Schema(
    {
        schooleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SchooleRegistration",
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

const ActivityTabel = mongoose.models.ActivityTabel || mongoose.model('ActivityTabel', activityTabelSchema);
module.exports = ActivityTabel;