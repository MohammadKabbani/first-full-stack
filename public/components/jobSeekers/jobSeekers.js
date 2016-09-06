var app = angular.module("JobSeekersApp");
app.controller("jobSeekersController", ["$scope","AdminService", function($scope,AdminService){
    
 $scope.onLoad=function(){
     AdminService.getJobAvl().then(function(resp){
     
         $scope.avalOffer=resp.data;
     });
 }
    $scope.onLoad();
}])