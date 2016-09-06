var express = require("express");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require ("mongoose");
var morgan = require ("morgan");
//var cors = require ("cors");
var port = process.env.PORT || 8000;

app.use(bodyParser.json());
//app.use(cors());
app.use (morgan("dev"));
app.use(express.static("../public"));
//routes \\
app.use("/api", require("./routes/JobAvailable"));
app.use("/api", require("./routes/jobSeekersRoutes"));

mongoose.connect("mongodb://localhost/MK-dataBase", function(){
    console.log("Database is connected")
});

app.listen(port, function(){
    console.log ("Server is running on port" + port);
});