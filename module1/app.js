(function() {
'use strict';

angular.module('LunchCheck', [])
      .controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.myLunch = "";
  $scope.lunchMessage="";

  $scope.CheckButton = function (){
    var lunchMessage = myLunchMessage($scope.myLunch);
    $scope.lunchMessage = lunchMessage;
    if(lunchMessage == "Enjoy!") $scope.messageColor= "green";
    else if(lunchMessage == "Too much!") $scope.messageColor= "red";
    else $scope.messageColor= "black";
  }

  function myLunchMessage(myLunch){
    var message = "";
    var lunchItems = myLunch.split(',');
    //console.log(lunchItems);
    if(lunchItems == "") return "Please enter data first";
    if (lunchItems.length <= 3) message = "Enjoy!";
    else message = "Too much!";
    return message;
  }
}

})();
