var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var cors = require("cors");
var applicationsRouter = require("./routes/applications");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/applications", applicationsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

mongoose.connect(
    "mongodb+srv://reactShop:b38hD5ZcAz0aZBfi@cluster0.fdtux.mongodb.net/test",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
        if (!error) {
            console.log("Connection to db successful");
        } else {
            console.log(error);
        }
    }
);

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    next(err);
    // res.render("error");
});

module.exports = app;
