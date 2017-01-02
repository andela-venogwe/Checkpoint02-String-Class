const chai = require('chai'),
  StringClass = require('../src/String-class');

const expect = chai.expect;

describe('String Class', () => {
  describe('hasVowels', () => {
    it('should return a Boolean', () => {
      expect(typeof 'ddfgnmpl'.hasVowels()).to.equal('boolean');
      expect(typeof 'aydfccg'.hasVowels()).to.equal('boolean');
    });

    it('should return true if the string contains vowels', () => {
      expect('aydfccg'.hasVowels()).to.equal(true);
    });

    it('should return false if the string has no vowel', () => {
      expect('ddfgnmpl'.hasVowels()).to.equal(false);
    });

    it('should return false for an empty string', () => {
      expect(''.hasVowels()).to.equal(false);
    });
  });

  describe('toUpper', () => {
    it('should return a String', () => {
      expect(typeof 'ddfgnmpl'.toUpper()).to.equal('string');
    });

    it('should transfom the string letters to uppercase', () => {
      expect('ddfgnmpl'.toUpper()).to.equal('DDFGNMPL');
    });
  });

  describe('toLower', () => {
    it('should return a String', () => {
      expect(typeof 'ddfgnmpl'.toLower()).to.equal('string');
    });

    it('should transfom the string letters to lowercase', () => {
      expect('DDFGNMPL'.toLower()).to.equal('ddfgnmpl');
    });
  });

  describe('ucFirst', () => {
    it('should return a String', () => {
      expect(typeof 'ddfgnmpl'.ucFirst()).to.equal('string');
    });

    it('should return the original string', () => {
      expect('ddfgnmpl'.ucFirst().toUpper()).to.equal('DDFGNMPL');
    });

    it('should transform the First Character in string to Upper case', () => {
      expect('ddfgnmpl'.ucFirst()[0]).to.equal('D');
    });
  });

  describe('isQuestion', () => {
    it('should return a Boolean', () => {
      expect(typeof 'ddfgnmpl'.isQuestion()).to.equal('boolean');
      expect(typeof 'aydfccg?'.isQuestion()).to.equal('boolean');
    });

    it('should return true if the string is a question', () => {
      expect('aydfccg?'.isQuestion()).to.equal(true);
    });

    it('should return false if the string is not a question', () => {
      expect('ddfgnmpl'.isQuestion()).to.equal(false);
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
      const testString = 'hello says the devil';
      expect(testString.words()[0]).to.equal('hello');
      expect(testString.words()[1]).to.equal('says');
      expect(testString.words()[2]).to.equal('the');
      expect(testString.words()[3]).to.equal('devil');
    });
  });

  describe('wordCount', () => {
    it('should return a Number', () => {
      expect(typeof 'hello says the devil'.wordCount()).to.equal('number');
    });

    it('should return the number of words in the string', () => {
      expect('hello says the devil'.wordCount()).to.equal(4);
      expect(''.wordCount()).to.equal(0);
    });
  });

  describe('toCurrency', () => {
    it('should return a String', () => {
      expect(typeof '12212.11221'.toCurrency()).to.equal('string');
    });

    it('should return a currency representation of the String', () => {
      expect('12212.11221'.toCurrency()).to.equal('12,212.11221');
      expect('122121.11'.toCurrency()).to.equal('122,121.11');
      expect('122121'.toCurrency()).to.equal('122,121.00');
      expect('0.11'.toCurrency()).to.equal('0.11');
      expect('.11'.toCurrency()).to.equal('0.11');
    });

    it('should remove no numeral characters from string', () => {
      expect('12212ade is here to.11221 stay'
        .toCurrency()).to.equal('12,212.11221');
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
      expect(typeof 'ddfgnmpl'.inverseCase()).to.equal('string');
    });

    it(`should return each letter in the string
     as an inverse of its current case`, () => {
      expect('ddfgnmpl'.inverseCase()).to.equal('DDFGNMPL');
      expect('hElP mE gEt Home'.inverseCase()).to.equal('HeLp Me GeT hOME');
      expect('Hello There'.inverseCase()).to.equal('hELLO tHERE');
    });
  });

  describe('alternatingCase', () => {
    it('should return a String', () => {
      expect(typeof '12212.11221'.alternatingCase()).to.equal('string');
    });

    it('should return the letters in alternating cases', () => {
      expect('hElP mE gEt Home'.alternatingCase())
        .to.equal('hElP mE gEt hOmE');
    });

    it('should start with a lower case', () => {
      expect('hElP mE gEt Home'.alternatingCase()[0]).to.equal('h');
    });
  });

  describe('getMiddle', () => {
    it('should return a String', () => {
      expect(typeof 'terrible'.getMiddle()).to.equal('string');
    });

    it('should return the character(s) in the middle of the string', () => {
      expect('hElP mE gEt Home'.getMiddle()).to.equal(' g');
      expect('help'.getMiddle()).to.equal('el');
      expect('hello'.getMiddle()).to.equal('l');
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
      expect(typeof 'terrible'.isDigit()).to.equal('boolean');
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
