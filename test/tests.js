const chai = require('chai'),
  StringClass = require('../src/String-class'),
  expect = chai.expect,
  testString = 'hello says the devil\'s',
  testVowelString = 'aydfccg',
  testConsonantString = 'ddfgnmpl';

describe('String Class', () => {
  describe('hasVowels', () => {
    it('should return a Boolean', () => {
      expect(typeof testConsonantString.hasVowels()).to.equal('boolean');
      expect(typeof testVowelString.hasVowels()).to.equal('boolean');
    });

    it('should return true if the string contains vowels', () => {
      expect(testVowelString.hasVowels()).to.equal(true);
    });

    it('should return false if the string has no vowel', () => {
      expect(testConsonantString.hasVowels()).to.equal(false);
    });

    it('should return false for an empty string', () => {
      expect(''.hasVowels()).to.equal(false);
    });
  });

  describe('toUpper', () => {
    it('should return a String', () => {
      expect(typeof testConsonantString.toUpper()).to.equal('string');
    });

    it('should transfom the string letters to uppercase', () => {
      expect(testConsonantString.toUpper()).to.equal('DDFGNMPL');
    });
  });

  describe('toLower', () => {
    it('should return a String', () => {
      expect(typeof testConsonantString.toLower()).to.equal('string');
    });

    it('should transfom the string letters to lowercase', () => {
      expect('DDFGNMPL'.toLower()).to.equal(testConsonantString);
    });
  });

  describe('ucFirst', () => {
    it('should return a String', () => {
      expect(typeof testConsonantString.ucFirst()).to.equal('string');
    });

    it('should return the original string', () => {
      expect(testConsonantString.ucFirst().toUpper()).to.equal('DDFGNMPL');
    });

    it('should transform the First Character in string to Upper case', () => {
      expect(testConsonantString.ucFirst()[0]).to.equal('D');
    });
  });

  describe('isQuestion', () => {
    it('should return a Boolean', () => {
      expect(typeof testConsonantString.isQuestion()).to.equal('boolean');
      expect(typeof 'aydfccg?'.isQuestion()).to.equal('boolean');
      expect(typeof testConsonantString.isQuestion()).to.equal('boolean');
    });

    it('should return true if the string is a question', () => {
      expect('aydfccg?'.isQuestion()).to.equal(true);
    });

    it('should return false if the string is not a question', () => {
      expect(testConsonantString.isQuestion()).to.equal(false);
    });

    it('should return false for an empty string', () => {
      expect(''.isQuestion()).to.equal(false);
    });
  });

  describe('words', () => {
    it('should return an array', () => {
      expect(Array.isArray('hello says the devil'.words())).to.equal(true);
    });

    it('should return a list of the words in the string', () => {
      expect(testString.words()[0]).to.equal('hello');
      expect(testString.words()[1]).to.equal('says');
      expect(testString.words()[2]).to.equal('the');
      expect(testString.words()[3]).to.equal('devil\'s');
    });
  });

  describe('wordCount', () => {
    it('should return a Number', () => {
      expect(typeof testString.wordCount()).to.equal('number');
    });

    it('should return the number of words in the string', () => {
      expect(testString.wordCount()).to.equal(4);
      expect(''.wordCount()).to.equal(0);
    });
  });

  describe('toCurrency', () => {
    it('should return a String', () => {
      expect(typeof '12212.11221'.toCurrency()).to.equal('string');
    });

    it('should return a currency representation of the String', () => {
      expect('12212.11221'.toCurrency()).to.equal('12,212.11');
      expect('122121.11'.toCurrency()).to.equal('122,121.11');
      expect('0.11'.toCurrency()).to.equal('0.11');
      expect('0.177'.toCurrency()).to.equal('0.18');
      expect('0.11.1.1'.toCurrency()).to.equal('0.11');
      expect('.11'.toCurrency()).to.equal('0.11');
    });

    it('should return the currency to two decimal places', () => {
      expect('122121'.toCurrency()).to.equal('122,121.00');
      expect('0.11'.toCurrency()).to.equal('0.11');
      expect('0.177'.toCurrency()).to.equal('0.18');
      expect('.11'.toCurrency()).to.equal('0.11');
    });

    it('should remove non numeral characters from string', () => {
      expect('12212ade is here to.11221 stay'
        .toCurrency()).to.equal('12,212.11');
    });
  });

  describe('fromCurrency', () => {
    it('should return a String', () => {
      expect(typeof '12212.11221'.fromCurrency()).to.equal('number');
    });

    it('should return the currency as a number', () => {
      expect('12212.11221'.fromCurrency()).to.equal(12212.11221);
    });
  });

  describe('inverseCase', () => {
    it('should return a Boolean', () => {
      expect(typeof testConsonantString.inverseCase()).to.equal('string');
    });

    it(`should return each letter in the string
     as an inverse of its current case`, () => {
        expect(testConsonantString.inverseCase()).to.equal('DDFGNMPL');
        expect('AYDFCCG'.inverseCase()).to.equal(testVowelString);
      });
  });

  describe('alternatingCase', () => {
    it('should return a String', () => {
      expect(typeof '12212.11221'.alternatingCase()).to.equal('string');
    });

    it('should return the letters in alternating cases', () => {
      expect(testString.alternatingCase())
        .to.equal('hElLo sAyS tHe dEvIlS');
    });

    it('should start with a lower case', () => {
      expect(testString.alternatingCase()[0]).to.equal('h');
    });
  });

  describe('getMiddle', () => {
    it('should return a String', () => {
      expect(typeof testVowelString.getMiddle()).to.equal('string');
    });

    it('should return the character(s) in the middle of the string', () => {
      expect(testVowelString.getMiddle()).to.equal('f');
      expect(testConsonantString.getMiddle()).to.equal('gn');
    });
  });

  describe('numberWords', () => {
    it('should return a String', () => {
      expect(typeof '12212.11221'.numberWords()).to.equal('string');
    });

    it('should return the numbers in words', () => {
      expect('12345'.numberWords()).to.equal('one two three four five');
    });
  });

  describe('isDigit', () => {
    it('should return a Boolean', () => {
      expect(typeof testString.isDigit()).to.equal('boolean');
    });

    it('should return true if the string is a digit(one number)', () => {
      expect('2'.isDigit()).to.equal(true);
      expect('12345'.isDigit()).to.equal(false);
    });
  });

  describe('doubleCheck', () => {
    it('should return a Boolean', () => {
      expect(typeof 'terrible'.doubleCheck()).to.equal('boolean');
    });

    it('should return true if the string is a digit(one number)', () => {
      expect('12345'.doubleCheck()).to.equal(false);
      expect('12>>'.doubleCheck()).to.equal(true);
    });

    it('should return true if the string contains double spaces', () => {
      expect('  '.doubleCheck()).to.equal(true);
    });
  });
});
