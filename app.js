var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var helloRouter = require("./routes/hello");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/", indexRouter);
// app.use(express.static(path.join(__dirname, "public")));

app.use("/hello", helloRouter);

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
