/**
 * Created by krzysztof on 30.05.16.
 */

angular.module('app')
    .controller('RegisterCtrl', function ($scope, UserSvc) {
        $scope.register = function (username, password) {
            UserSvc.register(username, password)
                .then(function (user) {
                    $scope.$emit('login', user)
                })

        }
    
})