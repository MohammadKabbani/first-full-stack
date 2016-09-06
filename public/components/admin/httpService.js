var app = angular.module("JobSeekersApp");
app.service("AdminService", ["$http", function ($http) {
    this.admin = [];
    this.getCVs = function () {
        return $http.get("/api/jobSeekers").then(function (response) {
            this.admin = response.data;
            return response;
        });
    };
    ///
    this.jobSeekers = [];
    
    this.getCVs = function () {
        return $http.get("/api/jobSeekers").then(function (response) {
            this.jobSeekers = response.data;
            return response;
        });
    }
    ///
    this.addJobAvl = function (newOffer) {
        return $http.post("/api/jobAvailable", newOffer);
    }
    this.getJobAvl = function () {
        return $http.get("/api/jobAvailable");
    }
            }]);


 
