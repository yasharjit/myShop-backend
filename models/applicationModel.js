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
});

const Application = mongoose.model("Application", applicationSchema);
module.exports = Application;
