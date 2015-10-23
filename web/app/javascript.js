
var app = angular.module('MyApp', ['ngRoute']);

app.controller('MyControl', ['$http', function ($http) {
        var self = this;
        self.newID = "";
        self.newName = "";
        self.newAge = "";

        self.persons = [
            {id: 1, name: "Jens", age: 18}
            , {id: 2, name: "Peter", age: 23}
            , {id: 3, name: "Hanne", age: 23}
        ];
        
    self.sendPost = function() {
        var data = $.param({
            json: JSON.stringify({
                id: self.newID,
                name: self.newName,
                age: self.newAge
            })
        });
        $http.post("/create", data).success(function(data, status) {
            self.persons.push(data)
        });
    };
        
        
//        self.itemsToAdd = [{
//                id: '',
//                name: '',
//                age: ''
//            }];
//
//        self.add = function (itemToAdd) {
//
//            var index = self.itemsToAdd.indexOf(itemToAdd);
//
//            self.itemsToAdd.splice(index, 1);
//
//            self.persons.push(angular.copy(itemToAdd))
//        }
//
//        self.addNew = function () {
//
//            self.itemsToAdd.push({
//                id: '',
//                name: '',
//                age: ''
//            })
//        }

    }]).config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/', {
                    template: '<h5> This is the default route </h5>'
                })
                .when('/showall', {
                    templateUrl: 'templates/showpersons.html'
                })
                .when('/detailed/:id/:name/:age', {
                    templateUrl: 'templates/detailed.html',
                    controller: ['$routeParams', function ($routeParams) {
                            this.id = $routeParams.id;
                            this.name = $routeParams.name;
                            this.age = $routeParams.age;
                        }],
                    controllerAs: 'urlCtrl'
                })
                .when('/create', {
                    templateUrl: 'templates/createuser.html'
                })
                .otherwise({redirectTo: '/'});
    }]);


//function PersonControl ($scope, persons) {
//        $scope.persons = persons;
//        
//        $scope.addPerson = function (index) {
//        persons.data.push({
//            id: $scope.persons.data.length + 1,
//            name: $scope.newPersonName,
//            age: $scope.newPersonAge
//        });
//       }
//}








      