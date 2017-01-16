# String Class 
[![Build Status](https://travis-ci.org/andela-venogwe/Checkpoint02-String-Class.svg?branch=master)](https://travis-ci.org/andela-venogwe/Checkpoint02-String-Class) [![Code Climate](https://codeclimate.com/github/andela-venogwe/Checkpoint02-String-Class/badges/gpa.svg)](https://codeclimate.com/github/andela-venogwe/Checkpoint02-String-Class) [![Test Coverage](https://codeclimate.com/github/andela-venogwe/Checkpoint02-String-Class/badges/coverage.svg)](https://codeclimate.com/github/andela-venogwe/Checkpoint02-String-Class/coverage) [![Issue Count](https://codeclimate.com/github/andela-venogwe/Checkpoint02-String-Class/badges/issue_count.svg)](https://codeclimate.com/github/andela-venogwe/Checkpoint02-String-Class)

A javascript App that extends the String class in Javascript, using Prototype Oriented Programming. Methods, procedures and instance attributes are added to the String class to support more string manipulation features.

## Technologies
- node ^4
- javascript(ECMAScript 2015) 
- Angularjs
- Html5
- Css3
- Jade
- Express
- Mocha
- Chai
- Gulp

## Local Development
- Clone the repository to your computer
- Navigate to the project folder using your terminal(eg. `cd string-class`)
- Install npm dependencies `npm install`
- Start a local server `npm start`
- To run the mocha test for the app use: `npm test`

## Web Deployment
- Use the App online by visiting the link https://v-string-class.herokuapp.com/
- deploy the app automatically to your heroku account by clicking the button below
- [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/andela-venogwe/Checkpoint02-String-Class/tree/develop)

## New Methods
1. hasVowels() - Returns a Boolean (True if this String contains an English vowel, otherwise False)
2. toUpper() - Returns this String with all it's lower case English alphabets converted to upper case
3. toLower() - Returns this String with all it's upper case English alphabets converted to lower case
4. ucFirst() - Returns this String but changes the first character (if it's an English alphabet) to an upper case
5. isQuestion() - Returns a Boolean (True if the string ends with a question mark, otherwise False.
6. words() - Returns a list of the words in the String, as an Array
7. wordCount() - Returns the number of words in the string
8. toCurrency() - Returns a currency representation of the String.
9. fromCurrency() - Returns a number representation of the Currency String
10. inverseCase() - Returns each of the English letter in the string as an inverse of its current case
11. alternatingCase() - Returns the letters in alternating cases, starting with a lower case.
12. getMiddle() - Returns the character(s) in the middle of the string
13. numberWords() - Returns the numbers in words e.g 325 should return three two five
14. isDigit() - Returns a Boolean. True if the String is a digit(one number), otherwise False
15. doubleCheck() - Returns a Boolean. True if the String contains double characters(including whitespace character), otherwise False.

### Limitations
- This is not a standalone class, it is an extension of the default Javascript String class

### Contributing
1. Fork this repository
2. Clone your repository: git clone git@github.com:your-username/Checkpoint02-String-Class.git
3. Create your feature branch: git checkout -b awesome-feature
4. Commit your changes: git commit -m "your commit message"
5. Push to the remote branch: git push origin awesome-feature
6. Open a Pull Request.

### License
- MIT