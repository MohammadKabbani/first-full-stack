var express = require("express");
var jobSeekersRoutes = express.Router();
var jobSeekers = require("../models/jobSeekers");

jobSeekersRoutes.route("/jobSeekers")
    .get(function (req, res) {
        jobSeekers.find(function (err, jobSeekers) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(jobSeekers);
            }
        });
    })
    .post(function(req,res){
    var newJobSeekers = new jobSeekers(req.body);
    console.log(newJobSeekers)
    newJobSeekers.save(function(err,newJobSeekersObj){
        if (err){
            res.status(500).send(err);
        }else {
            console.log("done post")
            // window.alert("Your CV is sent, we will contact you soon")
            res.send (newJobSeekersObj);
        }
    });
});

jobSeekersRoutes.route("/jobSeekers/:id")
    .get(function(req , res){
                   jobSeekers.findById(req.params.id, function(err,jobSeekersObj){
    if(err){
        res.status(500).send(err);
    }else{
        res.send(jobSeekersObj);
    }
});
})
    .put(function(req , res){
    jobSeekers.findByIdAndUpdate(req.params.id,req.body, {new:true},function(err,updatedJobSeekers){
        if (err){
        res.status(500).send(err);
    }else{
        res.send(updatedJobSeekers);
    }
    });
})
    .delete(function(req , res){
    jobSeekers.findByIdAndRemove(req.params.id, function(err, deletedJobSeekers){
        if (err){
        res.status(500).send(err);
    }else{
        res.send(deletedJobSeekers);
    }
    });
});

module.exports = jobSeekersRoutes;














