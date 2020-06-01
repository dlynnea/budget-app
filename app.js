// budget controller
var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            ID = data.allItems[type][data.allItems[type].length - 1]

            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            data.allItems[type].push(newItem);
            return newItem;
        }
    };

})();

// UI controller
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add-type',
        inputDescription: '.add-description',
        inputValue: '.add-value',
        inputBtn: '.add-button'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    };
})();

// app controller
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', addItem);
    
        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13) {
                addItem();
            }
        });
    };

    var addItem = function() {
        var input = UICtrl.getInput();
    };

    return {
        init: function() {
            console.log('app has started');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();











