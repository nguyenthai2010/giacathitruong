mainApp.controller('giacaController', function($scope, $http) {
    //ONLOAD
    $scope.homeOnLoad = function() {
    };

    $scope.listOnLoad = function() {
        listpage.init();
    };

    //PROCESS DATA
    $scope.loadData = function () {
        $('#loading').show();
        $http.get('http://taichinh-24h.com/giacathitruong.json').success(function(data) {
            listgiacadata = data;
            $scope.danhsachgia = listgiacadata;
            writeFileXMLOffline(listgiacadata);
            $('#loading').hide();
        });
    };

    $scope.setData = function (data) {
        listgiacadata = data;
        $scope.danhsachgia = listgiacadata;
        $scope.$apply();
    };


    $scope.$applyAsync(function () {
        console.log('$applyAsync');
        $scope.danhsachgia = listgiacadata;
    });

    //$scope.$apply()
    //initial load

    $scope.loadData();
    if(listgiacadata == null) {
        setTimeout(function(){
            $scope.loadData();
        }, 1000);
    }


    //LIST
    $scope.titlelistpage = '';
    $scope.bannerlistpage = '1';
    $scope.cityFilter = {khuvuc: ''};

    $scope.tanggiamclass = function (gia1 , gia2) {
        if(gia1 > gia2) {
            return 'up';
        }
        else if(gia1 < gia2) {
            return 'down';
        }
    };

    $scope.changeTitleListPage = function(obj) {
        var elem = angular.element(obj.srcElement);
        $data = elem.attr('data');
        $banner = elem.attr('banner');

        $scope.titlelistpage = $data;
        $scope.bannerlistpage = $banner;
    };

    $scope.backListPage = function() {
        $scope.titlelistpage = '';
        $scope.bannerlistpage = '1';
        $scope.searchFilter = '';
    };
});
