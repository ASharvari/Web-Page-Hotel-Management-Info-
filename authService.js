angular.module('myApp')
    .service('AuthService', ['$http', function($http) {
        var apiUrl = 'http://yourbackend.com/api'; // Replace with your backend API URL

        this.register = function(email, password) {
            return $http.post(apiUrl + '/register', { email: email, password: password });
        };

        this.login = function(email, password) {
            return $http.post(apiUrl + '/login', { email: email, password: password });
        };
    }]);
