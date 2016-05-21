/**
 * Created by krzysztof on 14.05.16.
 */
angular.module('app')
    .controller('LoginCtrl', function ($scope, UserSvc) {
        $scope.login = function (username, password) {
            UserSvc.login(username, password)
                .then(function (user) {
                    $scope.$emit('login', user)
                })
        }
    })