var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var jobSeekersSchema = new Schema({
    jobCategory: {
        type: String
        , required: true
    }
    , firstName: {
        type: String
        , required: true
    }
    , lastName: {
        type: String
//        , required: true
    }
    , DOB: {
        type: Date
//        , required: true
    }
    , Email: {
        type: String
//        , required: true
    }
    , phoneNum: {
        type: Number
//        , required: true
    }
    , address: {
        type: String
//        , required: true
    }
    , MaritalStatus: {
        type: String
//        , required: true
    }
    , yearsOfExp: {
        type: Number
        , required: true
    }
    , uploadYourCV: {
        type: String
//        , required: true
    }
});
module.exports = mongoose.model("jobSeekers", jobSeekersSchema);