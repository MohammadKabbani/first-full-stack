var app = angular.module("JobSeekersApp");
app.service("apply", ["$http", function ($http) {
//    this.jobSeekers = [];
//    this.getCVs = function () {
//        return $http.get("/api/jobSeekers").then(function (response) {
//            this.jobSeekers = response.data;
//            return response;
//        });
//    }
    this.applyCV = function (newCV) {
        return $http.post("/api/jobSeekers", newCV);
    }
            }]);
app.controller("applyController", ["$scope", "apply", function ($scope, apply) {
    $scope.submitCV = function(newCV) {
        console.log("hi")
        apply.applyCV(newCV).then(function (response) {
            $scope.jobSeeker = response.data;
        });
    }
//    apply.getCVs().then(function(resp){
//        $scope.jobSeekers=resp.data;
//    })
}]);
