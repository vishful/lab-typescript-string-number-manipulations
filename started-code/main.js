"use strict";
exports.__esModule = true;
var StringManipulations = /** @class */ (function () {
    function StringManipulations() {
    }
    StringManipulations.prototype.print = function (word) {
        console.log(word);
        return word.toUpperCase();
        return word.toLowerCase();
        var pos;
        var stringToConvert = window.prompt('Enter a number');
        var numberValue = Number(stringToConvert);
        return word.charAt(numberValue);
        var newWord = window.prompt('Enter another word to concatenate');
        return word.concat(newWord);
        return word.slice(1, -1);
        return word.length;
    };
    StringManipulations.prototype.printWithSpace = function (word) {
        for (var i = 0; i < word.length; i++) {
            console.log(word.charAt(i) + " ");
        }
    };
    StringManipulations.prototype.findVowel = function (word) {
        var count = 0;
        var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
        for (var i = 0; i < word.length; i++) {
        }
    };
    return StringManipulations;
}());
