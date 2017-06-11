/**
 * Created by Morgan on 3/30/2017.
 */
/**
 * Created by Morgan on 3/24/2017.
 */
var angular = require('angular');


angular.module("app", [])
    .controller('AppCtrl', ['$scope', function ($scope) {
        $scope.todos = [
            { name: 'Master HTML/CSS/Javascript', completed: true },
            { name: 'Learn AngularJS', completed: false },
            { name: 'Build NodeJS backend', completed: false },
            { name: 'Get started with ExpressJS', completed: false },
            { name: 'Setup MongoDB database', completed: false },
            { name: 'Be awesome!', completed: false },
        ];
    }]);


//
//function AppCtrl($scope){
//    console.log('Hello controller');
//
//    $scope.todos = [
//        { name: 'Master HTML/CSS/Javascript', completed: true },
//        { name: 'Learn AngularJS', completed: false },
//        { name: 'Build NodeJS backend', completed: false },
//        { name: 'Get started with ExpressJS', completed: false },
//        { name: 'Setup MongoDB database', completed: false },
//        { name: 'Be awesome!', completed: false },
//    ]
//}