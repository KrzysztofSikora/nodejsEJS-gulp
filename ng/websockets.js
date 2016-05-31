/**
 * Created by krzysztof on 31.05.16.
 */

angular.module('app')
    .run(function ($rootScope) {
        var url ='ws://localhost:3000'
        var connection = new WebSocket(url)
        
        connection.onopen = function () {
            console.log('Nawiązano połączenie z WebSocket.')
        }
        
        connection.onmessage = function (e) {
            console.log(e)
            var payload = JSON.parse(e.data)
            $rootScope.$broadcast('ws:' + payload.topic, payload.data)
        }
    })
