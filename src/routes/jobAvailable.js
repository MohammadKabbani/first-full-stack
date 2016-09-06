var express = require("express");
var jobAvailableRoutes = express.Router();
var adminWork = require("../models/jobAvailable");

jobAvailableRoutes.route("/jobAvailable/")
    .get(function (req, res) {
        adminWork.find(function (err, getWork) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(getWork);
            }
        });
    })
    .post(function(req,res){
    var newAdminWork = new adminWork(req.body);
    console.log(newAdminWork)
    newAdminWork.save(function(err,newAdminWork){
        if (err){
            res.status(500).send(err);
        }else {
            console.log("done post")
            res.send (newAdminWork);
        }
    });
});

jobAvailableRoutes.route("/jobAvailable/:id")
    .get(function(req , res){
                   adminWork.findById(req.params.id, function(err,jobAvailableObj){
    if(err){
        res.status(500).send(err);
    }else{
        res.send(jobAvailableObj);
    }
});
})
    .put(function(req , res){
    adminWork.findByIdAndUpdate(req.params.id,req.body, {new:true},function(err,updatedJobAvailable){
        if (err){
        res.status(500).send(err);
    }else{
        res.send(updatedJobAvailable);
    }
    });
})
    .delete(function(req , res){
    adminWork.findByIdAndRemove(req.params.id, function(err, deletedJobAvailable){
        if (err){
        res.status(500).send(err);
    }else{
        res.send(deletedJobAvailable);
    }
    });
});

module.exports = jobAvailableRoutes;














