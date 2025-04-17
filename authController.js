angular.module('myApp')
    .controller('AuthController', ['AuthService', function(AuthService) {
        var auth = this;

        auth.register = function() {
            AuthService.register(auth.registerEmail, auth.registerPassword)
                .then(function(response) {
                    // Handle success
                    console.log('Registration successful:', response.data);
                })
                .catch(function(error) {
                    // Handle error
                    console.error('Registration failed:', error.data);
                });
        };

        auth.login = function() {
            AuthService.login(auth.loginEmail, auth.loginPassword)
                .then(function(response) {
                    // Handle success
                    console.log('Login successful:', response.data);
                })
                .catch(function(error) {
                    // Handle error
                    console.error('Login failed:', error.data);
                });
        };
    }]);
