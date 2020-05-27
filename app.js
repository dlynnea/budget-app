// budget controller
var budgetController = (function() {
  
    
})();


// UI controller
var UIController = (function() {


})();


// app controller
var controller = (function(budgetCtrl, UICtrl) {

    var addItem = function() {
        console.log("click")
    }

    document.querySelector('.add-button').addEventListener('click', addItem);

    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13) {
            addItem();
        }
    });


})(budgetController, UIController);