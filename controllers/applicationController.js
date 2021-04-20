const Application = require("../models/applicationModel");

exports.postApplication = async (req, res, next) => {
    try {
        const newApplication = await Application.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                newApplication,
            },
        });
    } catch (error) {
        console.log(error);
    }
};

exports.getAllApplications = async (req, res, next) => {
    try {
        const applicationQuery = await Application.find({
            lastDate: { $gte: Date(Date.now()) },
        }).sort([["createdAt", -1]]);
        res.status(200).json({
            status: "success",
            data: {
                applicationQuery,
            },
        });
    } catch (error) {
        console.log(error);
    }
};
