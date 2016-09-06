var app = angular.module("JobSeekersApp", ["ngRoute", 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);
app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/home", {
            templateUrl: "components/home/home.html",
            controller: "HomeController"
        }).when("/aboutUs", {
            templateUrl: "components/aboutUs/aboutUs.html",
            controller: "aboutController"
        }).when("/jobSeekers", {
            templateUrl: "components/jobSeekers/jobSeekers.html",
            controller: "jobSeekersController"
        }).when("/employers", {
            templateUrl: "components/employers/employers.html",
            controller: "employersController"
        }).when("/contactUs", {
            templateUrl: "components/contactUs/contactUs.html",
            controller: "contactUsController"
        }).when("/Apply", {
            templateUrl: "components/Apply/apply.html",
            controller: "applyController"
        }).when("/admin", {
            templateUrl: "components/admin/admin.html",
            controller: "adminController"
        })
    }
                        ]);