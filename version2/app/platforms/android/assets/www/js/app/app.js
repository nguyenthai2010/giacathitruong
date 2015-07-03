var mainApp = angular.module("myApp", []);
var $scope;

mainApp.run(function(){
    Responsize.respone();
    homepage.init();
    listpage.init();
});


// *** PhoneGap functions:
var onLoad = function() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

var onDeviceReady = function() {

}