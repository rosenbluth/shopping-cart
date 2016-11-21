var app = angular.module('shoppingCartApp');
app.service('bagService', function() {
    var id = 0;
    var bagService = this;
    this.bag = [];
    this.addTea = function(tea, qty) {
        id++;
        bagService.bag.push({tea: tea, qty: qty, id: id});
    };

    this.removeTea = function(tea, qty){

      //need to add a remove button to each table element that is created
      //the button when clicked needs to remove the tea item
      //
        qty = id.length;
        var currentTea = tea.qty;
        if(currentTea){
            currentTea === currentTea.delete();
            qty-1;
        }
    };
});

// $scope.removeChoice = function() {
//     var lastItem = $scope.choices.length-1;
//     $scope.choices.splice(lastItem);
//   };
//
// });
