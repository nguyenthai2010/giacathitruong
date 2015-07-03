mainApp.controller('giacaController', function($scope, $http) {
    //ONLOAD
    $scope.homeOnLoad = function() {

    };

    $scope.listOnLoad = function() {
        listpage.init();
    };

    //GET DATA
    $http.get('giacathitruong.json').success(function(data) {
        $scope.danhsachgia = data;
    });

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


        /*$scope.cityFilter.khuvuc = '';
        $( ".listgiaca nav section:eq(0)" ).click();*/
    };
});
