const chai = require('chai');

const StringClass = require('../src/String-class');

const expect = chai.expect,
  testString = 'hello says the devil\'s',
  testVowelString = 'aydfccg',
  testConsonantString = 'ddfgnmpl',
  UpperCaseString = 'DDFGNMPL',
  questionString = 'aydfccg?',
  currencyString = '12212.11221',
  noDecimalCurrency = '122121',
  threeDecimalCurrency = '0.177',
  mantissaCurrency = '.11',
  invalidCurrency = '11,2.3.4',
  singleDigit = '2',
  doubleString = 'terrible',
  noDoubles = '21plics';

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
      expect(UpperCaseString.toLower()).to.equal(testConsonantString);
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

    it(`should return the string if the 
    first letter isn't a letter or uppercase word`, () => {
      expect(currencyString.ucFirst()).to.equal(currencyString);
    });
  });

  describe('isQuestion', () => {
    it('should return a Boolean', () => {
      expect(typeof testConsonantString.isQuestion()).to.equal('boolean');
      expect(typeof questionString.isQuestion()).to.equal('boolean');
      expect(typeof testConsonantString.isQuestion()).to.equal('boolean');
    });

    it('should return true if the string is a question', () => {
      expect(questionString.isQuestion()).to.equal(true);
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
      expect(Array.isArray(testString.words())).to.equal(true);
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
    });

    it('should return zero for an empty string', () => {
      expect(''.wordCount()).to.equal(0);
    });
  });

  describe('toCurrency', () => {
    it('should return a String', () => {
      expect(typeof currencyString.toCurrency()).to.equal('string');
    });

    it('should return a currency representation of the String', () => {
      expect(currencyString.toCurrency()).to.equal('12,212.11');
    });

    it('should return a currency with two decimal places', () => {
      expect(noDecimalCurrency.toCurrency()).to.equal('122,121.00');
      expect(threeDecimalCurrency.toCurrency()).to.equal('0.18');
    });

    it('should add leading 0 to currency strings with only mantissa', () => {
      expect(mantissaCurrency.toCurrency()).to.equal('0.11');
    });

    it('should reject invalid currency formats', () => {
      expect(invalidCurrency.toCurrency()).to.equal('invalid currency string');
    });
  });

  describe('fromCurrency', () => {
    it('should return the currency as a number', () => {
      expect(typeof currencyString.fromCurrency()).to.equal('number');
    });

    it('should return invalid currency string for invalid entries', () => {
      expect(invalidCurrency.fromCurrency()).to.equal('invalid currency string');
    });
  });

  describe('inverseCase', () => {
    it('should return a Boolean', () => {
      expect(typeof testConsonantString.inverseCase()).to.equal('string');
    });

    it('should invert the case of each letter in the string', () => {
      expect(testConsonantString.inverseCase()).to.equal('DDFGNMPL');
      expect(UpperCaseString.inverseCase()).to.equal('ddfgnmpl');
    });
  });

  describe('alternatingCase', () => {
    it('should return a String', () => {
      expect(typeof testString.alternatingCase()).to.equal('string');
    });

    it('should return the letters in alternating cases', () => {
      expect(testString.alternatingCase())
        .to.equal('hElLo sAyS tHe dEvIl\'s');
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
      expect(typeof currencyString.numberWords()).to.equal('string');
    });

    it('should return the numbers in words', () => {
      expect(currencyString.numberWords())
      .to.equal('one two two one two one one two two one');
    });
  });

  describe('isDigit', () => {
    it('should return a Boolean', () => {
      expect(typeof testString.isDigit()).to.equal('boolean');
    });

    it('should return true if the string is a digit(one number)', () => {
      expect(singleDigit.isDigit()).to.equal(true);
      expect(noDecimalCurrency.isDigit()).to.equal(false);
    });
  });

  describe('doubleCheck', () => {
    it('should return a Boolean', () => {
      expect(typeof doubleString.doubleCheck()).to.equal('boolean');
    });

    it('should return true if the string contains double characters', () => {
      expect(doubleString.doubleCheck()).to.equal(true);
      expect(currencyString.doubleCheck()).to.equal(true);
    });

    it('should return false for strings with no repeating characters', () => {
      expect('  '.doubleCheck()).to.equal(true);
    });

    it('should return true if the string contains double spaces', () => {
      expect(noDoubles.doubleCheck()).to.equal(false);
    });
  });
});
