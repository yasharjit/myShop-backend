const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    organization: {
        type: String,
    },
    vacancyType: {
        type: String,
    },
    noOfVacancies: {
        type: Number,
    },
    qualification: {
        type: String,
    },
    age: {
        type: String,
    },
    lastDate: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;
