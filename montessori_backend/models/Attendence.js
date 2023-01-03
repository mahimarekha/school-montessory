const mongoose = require('mongoose');

const attendenceSchema = new mongoose.Schema(
    {
        schooleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SchooleRegistration",
            required: true,
        },
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true,
        },
        classId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class",
            required: true,
        },
        teacherId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Teacher",
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
        },
        attendence: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
     },
    {
        timestamps: true,
    }
);

const Attendence = mongoose.models.Attendence || mongoose.model('Attendence', attendenceSchema);
module.exports = Attendence;