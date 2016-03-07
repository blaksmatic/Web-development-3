/* Sample Controller */
app.controller('mainController', ['$scope', function ($scope) {
    $scope.test = "Yes I AM"
}]);

app.controller('listController', ['$scope', '$http', function ($scope, $http) {
    $scope.errorData = "YesYes";
    $scope.movie_data_list = [];
    $scope.assend = false;
    $scope.assOption = [{
        "name": "Asscending", "Asscend": false
    }, {
        "name": "Descending", "Asscend": true
    }];
    $scope.asscending = $scope.assOption[0];
    $scope.order = "rank";
    $scope.input_title = "";


    $http.get('../data/imdb250.json')
        .success(function (all_movie_data) {
            $scope.errorData = "YesYesYes";
            $scope.movie_data = all_movie_data;
            for (var i = 0; i < all_movie_data.length; i++) {
                $scope.movie_data_list.push(all_movie_data[i]);
            }
        })
        .error(function (e) {
            $scope.errorData = "ReadDataError"
        });


}]);


app.controller('galleryController', ['$scope', '$http', function ($scope, $http) {
    $scope.errorData = "YesYes";
    $scope.movie_data_list = [];
    $scope.assend = false;

    $scope.order = "rank";
    $scope.input_title = "";

    $scope.genre_this = 'all';

    $http.get('../data/imdb250.json')
        .success(function (all_movie_data) {
            $scope.errorData = "YesYesYes";
            $scope.movie_data = all_movie_data;
            for (var i = 0; i < all_movie_data.length; i++) {
                all_movie_data[i]['genre'].push('all');
                $scope.movie_data_list.push(all_movie_data[i]);
            }
        })
        .error(function (e) {
            $scope.errorData = "ReadDataError"
        });
}]);


app.controller('detailController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.errorData = "YesYes";
    $scope.movie_data_list = [];
    $scope.rank = parseInt($routeParams.rank);

    $http.get('../data/imdb250.json')
        .success(function (all_movie_data) {
            $scope.movie_data = all_movie_data;
            for (var i = 0; i < all_movie_data.length; i++) {
                $scope.movie_data_list.push(all_movie_data[i]);
                if (all_movie_data[i].rank == $scope.rank)
                    $scope.movie = all_movie_data[i];
            }
        })
        .error(function (e) {
            $scope.errorData = "ReadDataError"
        });


}]);

