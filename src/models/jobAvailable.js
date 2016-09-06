var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var jobAvailableSchema = new Schema({
    jobTitle: {
        type: String
        , required: true
    }
    , jobDiscription: {
        type: String
        , required: true
    }
    , place: {
        type: String
        , required: true
    }
    , salay: {
        type: String
        , required: true
    }
    , chooseFile: {
        type: String
    }
    , experienceNeeded: {
        type: String
        , required: true
    }
});
module.exports = mongoose.model("jobAvailable", jobAvailableSchema);