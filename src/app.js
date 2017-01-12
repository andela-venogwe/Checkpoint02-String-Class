const angular = require('angular');

const StringClass = require('./string-class');

const app = angular.module('string', []);

app.controller('DropdownController', ($scope) => {
  $scope.methods = {
    type: 'select',
    name: 'hasVowels',
    values: [
      ['hasVowels', `Returns a Boolean (True if this String contains an English
      vowel, otherwise False)`],
      ['toUpper', `Returns this String with all it's lower case English alphabets
      converted to upper case`],
      ['toLower', `Returns this String with all it's upper case English alphabets
      converted to lower case`],
      ['ucFirst', `Returns this String but changes the first character (if it's
      an English alphabet) to an upper case`],
      ['isQuestion', `Returns a Boolean (True if the string ends with a question
      mark, otherwise False`],
      ['words', 'Returns a list of the words in the String, as an Array'],
      ['wordCount', 'Returns the number of words in the string'],
      ['toCurrency', 'Returns a currency representation of the String'],
      ['fromCurrency', 'Returns a number representation of the Currency String'],
      ['inverseCase', `Returns each of the English letter in the string as an
      inverse of its current case`],
      ['alternatingCase', `Returns the letters in alternating cases, starting
      with a lower case`],
      ['getMiddle', 'Returns the character(s) in the middle of the string'],
      ['numberWords', `Returns the numbers in words e.g 325 should return three
      two five`],
      ['isDigit', `Returns a Boolean. True if the String is a digit(one number),
      otherwise False`],
      ['doubleCheck', `Returns a Boolean. True if the String contains double
      characters(including whitespace character), otherwise False`]
    ]
  };
  $scope.selectedMethod = [];
  $scope.inputText = '';

  $scope.theResults = () => {
    if ($scope.selectedMethod.length === 2 && $scope.inputText.length > 0) {
      try {
        $scope.result = $scope.inputText[$scope.selectedMethod[0]]();
      } catch (error) {
        $scope.result = 'bad input string';
      }
    }
  };
});
