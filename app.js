// budget controller
var budgetController = (function() {
  
    
})();


// UI controller
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add-type',
        inputDescription: '.add-description',
        inputValue: '.add-value'
    }

    return {
        getInput: function() {

            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
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