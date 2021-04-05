var express = require("express");
var applicationController = require("../controllers/applicationController");
var router = express.Router();

router
    .route("/")
    .post(applicationController.postApplication)
    .get(applicationController.getAllApplications);

module.exports = router;
