var app = angular.module('toDoList', []);
app.controller('listController', function($scope) {
  $scope.chores = ['walk the dog', 'water the plants', 'cook dinner', 'complete homework'];
  $scope.addChore = function(){
    $scope.chores.push($scope.newChore);
    $scope.newChore = "";
  }
});
