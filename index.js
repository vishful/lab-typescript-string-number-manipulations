"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
console.log('Welcome to ProGrad');
var x = 10;
var y = 20;
var sum;
var title = "ProGrad";
var isbeginner = true;
var total = 20;
var name = "Venkatesh";
var sentence = " My name is " + name + "\nand I am a beginner in typeScript";
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Venkatesh', 25];
console.log(person1);
console.log(sentence);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var c = Color.Red;
console.log(c);
var randomValue = 10;
randomValue = true;
randomValue = "Venkat";
console.log(randomValue);
function add(number1, number2) {
    return number1 + number2;
}
function addOptional(number1, number2) {
    if (number2)
        return number1 + number2;
    else
        return number1;
}
function addDefault(number1, number2) {
    if (number2 === void 0) { number2 = 10; }
    if (number2)
        return number1 + number2;
    else
        return number1;
}
add(5, 10);
addOptional(5);
addDefault(10, 30);
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.display = function () {
        console.log("Welcome to class " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("Venkatesh");
emp1.display();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating task");
    };
    return Manager;
}(Employee));
var manager = new Manager('Venkatesh');
manager.delegateWork();
manager.display();
console.log(manager.employeeName);
