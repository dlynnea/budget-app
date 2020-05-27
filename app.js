// budget controller
var budgetController = (function() {
  
    
})();


// UI controller
var UIController = (function() {

    return {
        getInput: function() {

            return {
                type: document.querySelector('.add-type').value,
                description: document.querySelector('.add-description').value,
                value: document.querySelector('.add-value').value,
            }
        }
    };

})();


// app controller
var controller = (function(budgetCtrl, UICtrl) {

    var addItem = function() {
        var input = UICtrl.getInput();
        console.log(input)
    }

    document.querySelector('.add-button').addEventListener('click', addItem);

    document.addEventListener('keypress', function(event) {
        if(event.keyCode === 13 || event.which === 13) {
            addItem();
        }

    });


})(budgetController, UIController);