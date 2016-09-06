var app = angular.module("JobSeekersApp");
app.controller("adminController", ["$scope", "AdminService", function ($scope, AdminService) {
    $scope.admin=[];
    $scope.jobSeekers=[];
 $scope.jobForm=true;
    console.log($scope.jobForm)
 $scope.viewCvForm =false;
 $scope.changeView =function(){
     $scope.jobForm=false;
 $scope.viewCvForm =true;
     console.log("viewCvForm"+$scope.viewCvForm)
 }
 $scope.changeform =function(){
     $scope.jobForm=true;
 $scope.viewCvForm =false;
     console.log($scope.jobForm)
 }
 
   $scope.submitJob=function(newJob){
       console.log(newJob)
       AdminService.addJobAvl(newJob).then(function(data){
          
      //$scope.admin=data;
           
  }); 
   }
   
   AdminService.getCVs().then(function(resp){
        $scope.jobSeekers=resp.data;
    });
// AdminService.getCVs().then(function(data){
//      $scope.admin=data;
//  });
//    $scope.jobSeekers = AdminService.jobSeekers;
// $scope.applyCV = function(newCV){
//      AdminService.applyCV(newCV)
// }
}]);




