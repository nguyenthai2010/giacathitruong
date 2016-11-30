var mainApp = angular.module("myApp", []);
var $scope;
var listgiacadata = null;

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
    runGiacathitruong()
}

function runGiacathitruong(){
    if(checkConnection()){

    }
    else{
        readOfflineFile();
    }
}

//check connection
function checkConnection() {
    if(DEMO)
        return true;

    try {
        var networkState = navigator.connection.type;
        var states = {};
        states[Connection.UNKNOWN]  = 1;//'Unknown connection'
        states[Connection.ETHERNET] = 2;//'Ethernet connection'
        states[Connection.WIFI]     = 3;//'WiFi connection'
        states[Connection.CELL_2G]  = 4;//'Cell 2G connection'
        states[Connection.CELL_3G]  = 5;//'Cell 3G connection'
        states[Connection.CELL_4G]  = 6;//'Cell 4G connection'
        states[Connection.CELL]     = 7;//'Cell generic connection'
        states[Connection.NONE]     = 8;//'No network connection'
        if(states[networkState] == 1 || states[networkState] == 8)
        {
            return false;
        }
        else
        {
            return true;
        }    }
    catch (e) {
        return false;
    }


}
// *** read offline file
var readOfflineFile = function() {
    if(DEMO) return;
    fileRead.run('data.json');
}


// *** write file XML
var writeFileXMLOffline = function(data) {
    if(DEMO) return;
    if(checkConnection()){
        var strWrite = data;
        fileWrite.run('data.json', strWrite);
    }
}