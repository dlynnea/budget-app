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

            // create new ID
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            //create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            // push it into our data structure
            data.allItems[type].push(newItem);

            // return the new element
            return newItem;
        },

        testing: function() {
            console.log(data);
        }
    };

})();

// UI controller
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add-type',
        inputDescription: '.add-description',
        inputValue: '.add-value',
        inputBtn: '.add-button',
        incomeContainer: '.income-list',
        expensesContainer: '.expenses-list',
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;

            // create html string with placeholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-0"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-0"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //replace the placeholder text with actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            //insert HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        clearFields: function() {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue)
            
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(curr, i, arr) {
                curr.value = '';
            });

            fieldsArr[0].focus();
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

        var input, newItem;
        
        // get the field input data
        input = UICtrl.getInput();

        // add the item to the bugdet controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //add the item to the UI
        UICtrl.addListItem(newItem, input.type);

        //clearing the input fields
        UICtrl.clearFields();
    };

    return {
        init: function() {
            console.log('app has started');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();











