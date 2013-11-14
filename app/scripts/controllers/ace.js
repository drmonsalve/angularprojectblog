'use strict';

angular.module('angularApp')
  .controller('AceCtrl', ['$scope', function ($scope) {
   
    $scope.aceLoaded = function(_editor) {
      // Options
      _editor.setReadOnly(true);
      _editor.insert("HOLA");
    };

    $scope.aceChanged = function(_editor) {
      _editor.insert("HOLA");
      console.log("AA");
    };

    $scope.algo2 = function () {
      return "hola";
    };

  }]);
