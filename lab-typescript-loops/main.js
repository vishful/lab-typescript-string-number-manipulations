"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.sayHello = function (word) {
        console.log(word);
    };
    StringManipulations.prototype.sayHelloWithSpace = function (sentence) {
        var temp = sentence;
        var str = "";
        for (var i = 0; i < temp.length; i++) {
            str = str + temp[i] + " ";
        }
        console.log(str);
    };
    return StringManipulations;
}());
exports.StringManipulations = StringManipulations;
var NumberTypes = /** @class */ (function () {
    function NumberTypes() {
    }
    NumberTypes.prototype.findPrime = function (num) {
        if (num === void 0) { num = 5; }
        var temp = 0;
        for (var i = 2; i < num; i++) {
            if (num % i == 0)
                temp = 1;
        }
        if (temp == 0)
            return "It is Prime";
        else
            return "It is not Prime";
    };
    NumberTypes.prototype.findMagic = function (n) {
        if (n === void 0) { n = 5; }
        var sum = 0, num = n;
        while (num > 9) {
            sum = num;
            var s = 0;
            while (sum != 0) {
                s = s + (sum % 10);
                sum = sum / 10;
            }
            num = s;
        }
        if (num == 1)
            return "It is Magic Number";
        else
            return "It is not Magic Number";
    };
    NumberTypes.prototype.findVowel = function (str) {
        if (str === void 0) { str = "ProGrad"; }
        var vowel = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u')
                vowel++;
            else if (str.charAt(i) === 'A' || str.charAt(i) === 'E' || str.charAt(i) === 'I' || str.charAt(i) === 'O' || str.charAt(i) === 'U')
                vowel++;
        }
        return vowel;
    };
    return NumberTypes;
}());
exports.NumberTypes = NumberTypes;
var hello = new StringManipulations();
hello.sayHello("Venkatesh");
hello.sayHelloWithSpace("Venkatesh");
