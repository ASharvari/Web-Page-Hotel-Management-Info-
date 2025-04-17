var app = angular.module('registrationApp', []);

app.controller('RegistrationController', function($scope, $window) {
    $scope.user = {};

    $scope.register = function() {
        // Perform registration logic here (e.g., send data to server)

        // Assuming registration is successful
        // Redirect to the to-do page
        $window.location.href = 'project1.html';
    };
});
