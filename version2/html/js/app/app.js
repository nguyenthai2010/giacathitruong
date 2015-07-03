var mainApp = angular.module("myApp", []);
var $scope;

mainApp.run(function(){
});

$(document).ready(function(){
    Responsize.init();
    homepage.init();
    listpage.init();
});