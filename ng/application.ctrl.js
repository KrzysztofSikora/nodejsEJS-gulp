/**
 * Created by krzysztof on 21.05.16.
 */
angular.module('app')
.controller('ApplicationCtrl', function ($scope) {
    $scope.$on('login', function (_, response) {
        $scope.currentUser = response.data
    })
})