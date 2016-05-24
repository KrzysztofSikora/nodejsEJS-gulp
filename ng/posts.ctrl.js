/**
 * Created by krzysztof on 26.04.16.
 */
angular.module('app')
.controller('PostsCtrl', function ($scope, PostsSvc) {

    $scope.addPost = function () {
        if ($scope.postBody) {
            PostsSvc.create({
                username: "dupa",
                body: $scope.postBody
            }).success(function (post) {
                $scope.posts.unshift(post)
                $scope.postBody = null
            })
        }
    }

    PostsSvc.fetch().success(function (posts) {
        $scope.posts = posts

    })

})
