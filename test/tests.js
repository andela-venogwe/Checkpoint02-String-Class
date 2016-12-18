/* eslint-disable no-unused-vars*/
/* eslint-disable no-await-in-loop*/
const chai = require('chai'), StringClass = require('../src/String-class');

const expect = chai.expect, assert = chai.assert, should = chai.should();

describe('String Class', () => {
  describe('hasVowels', () => {
    it('should return a Boolean', () => {
      'ddfgnmpl'.hasVowels().should.be.a('boolean');
      'aydfccg'.hasVowels().should.be.a('boolean');
    });

    it('should return true if the string contains vowels', () => {
      assert.equal(true, 'aydfccg'.hasVowels());
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
      'ddfgnmpl'.toUpper().should.be.a('string');
    });

    it('should transfom the string letters to uppercase', () => {
      expect('ddfgnmpl'.toUpper()).to.equal('DDFGNMPL');
    });
  });

  describe('toLower', () => {
    it('should return a String', () => {
      'ddfgnmpl'.toLower().should.be.a('string');
    });

    it('should transfom the string letters to lowercase', () => {
      expect('DDFGNMPL'.toLower()).to.equal('ddfgnmpl');
    });
  });

  describe('ucFirst', () => {
    it('should return a String', () => {
      'ddfgnmpl'.ucFirst().should.be.a('string');
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
      'ddfgnmpl'.isQuestion().should.be.a('boolean');
      'aydfccg?'.isQuestion().should.be.a('boolean');
    });

    it('should return true if the string is a question', () => {
      assert.equal(true, 'are you a question ?'.isQuestion());
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
      assert.equal(true, Array.isArray('hello says the devil'.words()));
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
      'hello says the devil'.wordCount().should.be.a('number');
    });

    it('should return the number of words in the string', () => {
      'hello says the devil'.wordCount().should.equal(4);
      ''.wordCount().should.equal(0);
    });
  });

  describe('toCurrency', () => {
    it('should return a String', () => {
      '12212.11221'.toCurrency().should.be.a('string');
    });

    it('should return a currency representation of the String', () => {
      expect('12212.11221'.toCurrency()).to.equal('12,212.11221');
      expect('122121.11'.toCurrency()).to.equal('122,121.11');
      expect('122121'.toCurrency()).to.equal('122,121.00');
      expect('0.11'.toCurrency()).to.equal('0.11');
    });

    it('should remove no numeral characters from string', () => {
      expect('12212ade is here to.11221 stay'
        .toCurrency()).to.equal('12,212.11221');
    });
  });

  describe('fromCurrency', () => {
    it('should return a String', () => {
      '12212.11221'.fromCurrency().should.be.a('number');
    });

    it('should return the currency as a number', () => {
      expect('12212.11221'.fromCurrency()).to.equal(12212.11221);
    });
  });

  describe('inverseCase', () => {
    it('should return a Boolean', () => {
      'ddfgnmpl'.inverseCase().should.be.a('string');
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
      '12212.11221'.alternatingCase().should.be.a('string');
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
      'terrible'.getMiddle().should.be.a('string');
    });

    it('should return the character(s) in the middle of the string', () => {
      expect('hElP mE gEt Home'.getMiddle()).to.equal(' g');
      expect('help'.getMiddle()).to.equal('el');
      expect('hello'.getMiddle()).to.equal('l');
    });
  });

  describe('numberWords', () => {
    it('should return a String', () => {
      '12212.11221'.numberWords().should.be.a('string');
    });

    it('should return the numbers in words', () => {
      expect('12345'.numberWords()).to.equal('one two three four five');
    });
  });

  describe('isDigit', () => {
    it('should return a Boolean', () => {
      'terrible'.isDigit().should.be.a('boolean');
    });

    it('should return true if the string is a digit(one number)', () => {
      assert.equal(true, '2'.isDigit());
      expect('12345'.isDigit()).to.equal(false);
    });
  });

  describe('doubleCheck', () => {
    it('should return a Boolean', () => {
      'terrible'.doubleCheck().should.be.a('boolean');
    });

    it('should return true if the string is a digit(one number)', () => {
      assert.equal(true, '22'.doubleCheck());
      expect('12345'.doubleCheck()).to.equal(false);
      expect('12>>'.doubleCheck()).to.equal(true);
    });

    it('should return true if the string contains double spaces', () => {
      assert.equal(true, '  '.doubleCheck());
    });
  });
});
