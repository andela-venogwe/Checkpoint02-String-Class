const chai = require('chai');

const StringClass = require('../src/string-class');

const expect = chai.expect;

describe('String Class', () => {
  describe('hasVowels', () => {
    const consonantString = 'hbdjklm';
    const vowelString = 'aydfccg';

    it('should return a Boolean', () => {
      expect(typeof consonantString.hasVowels()).to.equal('boolean');
      expect(typeof vowelString.hasVowels()).to.equal('boolean');
    });

    it('should return true if the string contains vowels', () => {
      expect(vowelString.hasVowels()).to.equal(true);
    });

    it('should return false if the string has no vowel', () => {
      expect(consonantString.hasVowels()).to.equal(false);
    });

    it('should return false for an empty string', () => {
      expect(''.hasVowels()).to.equal(false);
    });
  });

  describe('toUpper', () => {
    const testString = 'ddfgnmpl';

    it('should return a String', () => {
      expect(typeof testString.toUpper()).to.equal('string');
    });

    it('should transfom the string letters to uppercase', () => {
      expect(testString.toUpper()).to.equal('DDFGNMPL');
    });
  });

  describe('toLower', () => {
    const testString = 'DDFGNMPL';
    it('should return a String', () => {
      expect(typeof testString.toLower()).to.equal('string');
    });

    it('should transfom the string letters to lowercase', () => {
      expect(testString.toLower()).to.equal('ddfgnmpl');
    });
  });

  describe('ucFirst', () => {
    const testString = 'dDFGNMPL';
    const testString0 = '1223221';

    it('should return a String', () => {
      expect(typeof testString.ucFirst()).to.equal('string');
    });

    it('should return the original string', () => {
      expect(testString.ucFirst().toUpper()).to.equal('DDFGNMPL');
    });

    it('should transform the First Character in string to Upper case', () => {
      expect(testString.ucFirst()[0]).to.equal('D');
    });

    it(`should return the string if the
    first letter isn't a letter or uppercase word`, () => {
      expect(testString0.ucFirst()).to.equal('1223221');
    });
  });

  describe('isQuestion', () => {
    const question = 'hello are you there?',
      special = 'is #£ a non word string?',
      notQuestion = 'is coming home';

    it('should return a Boolean', () => {
      expect(typeof question.isQuestion()).to.equal('boolean');
      expect(typeof notQuestion.isQuestion()).to.equal('boolean');
    });

    it('should return true if the string is a question', () => {
      expect(question.isQuestion()).to.equal(true);
    });

    it('should return false if the string is not a question', () => {
      expect(notQuestion.isQuestion()).to.equal(false);
    });

    it('should return false for strings with special characters', () => {
      expect(special.isQuestion()).to.equal(false);
    });

    it('should return false for an empty string', () => {
      expect(''.isQuestion()).to.equal(false);
    });
  });

  describe('words', () => {
    const sentence = 'the big-fat cow';

    it('should return an array', () => {
      expect(Array.isArray(sentence.words())).to.equal(true);
    });

    it('should return a list of the words in the string', () => {
      expect(sentence.words()[0]).to.equal('the');
      expect(sentence.words()[1]).to.equal('big-fat');
      expect(sentence.words()[2]).to.equal('cow');
    });
  });

  describe('wordCount', () => {
    const testString = 'hello says the devil\'s';

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
    const currency = '12212.11221',
      noDecimalCurrency = '122121',
      threeDecimalCurrency = '0.177',
      mantissaCurrency = '.11',
      invalidCurrency = '11,2.3.4';

    it('should return a String', () => {
      expect(typeof currency.toCurrency()).to.equal('string');
    });

    it('should return a currency representation of the String', () => {
      expect(currency.toCurrency()).to.equal('12,212.11');
    });

    it('should return a currency with two decimal places', () => {
      expect(noDecimalCurrency.toCurrency()).to.equal('122,121.00');
      expect(threeDecimalCurrency.toCurrency()).to.equal('0.18');
    });

    it('should add leading 0 to currency strings with only mantissa', () => {
      expect(mantissaCurrency.toCurrency()).to.equal('0.11');
    });

    it('should reject invalid currency formats', () => {
      const error = () => invalidCurrency.toCurrency();
      expect(error).to.throw(TypeError, /invalid currency string/);
    });
  });

  describe('fromCurrency', () => {
    const currency = '122,121.11221';
    const invalidCurrency = '11222.3';

    it('should return the currency as a number', () => {
      expect(typeof currency.fromCurrency()).to.equal('number');
    });

    it('should return invalid currency string for invalid entries', () => {
      const error = () => invalidCurrency.fromCurrency();
      expect(error).to.throw(TypeError, /invalid currency string/);
    });
  });

  describe('inverseCase', () => {
    const testConsonantString = 'ddfgnmpl',
      UpperCaseString = 'DDFGNMPL';

    it('should return a Boolean', () => {
      expect(typeof testConsonantString.inverseCase()).to.equal('string');
    });

    it('should invert the case of each letter in the string', () => {
      expect(testConsonantString.inverseCase()).to.equal('DDFGNMPL');
      expect(UpperCaseString.inverseCase()).to.equal('ddfgnmpl');
    });
  });

  describe('alternatingCase', () => {
    const testString = 'hello says the devil\'s';
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
    const testString = 'hello';
    const testString0 = 'read';

    it('should return a String', () => {
      expect(typeof testString.getMiddle()).to.equal('string');
    });

    it('should return the character(s) in the middle of the string', () => {
      expect(testString.getMiddle()).to.equal('l');
      expect(testString0.getMiddle()).to.equal('ea');
    });
  });

  describe('numberWords ', () => {
    const numbers = '12345',
      testString = '123four';

    it('should return a String', () => {
      expect(typeof numbers.numberWords()).to.equal('string');
    });

    it('should return the numbers in words', () => {
      expect(numbers.numberWords())
      .to.equal('one two three four five');
    });

    it('should throw a TypeError for invalid strings', () => {
      const error = () => testString.numberWords();
      expect(error).to
      .throw(TypeError, /invalid characters present in string/);
    });
  });

  describe('isDigit', () => {
    const singleDigit = '2',
      doubleDigit = '22';

    it('should return a Boolean', () => {
      expect(typeof singleDigit.isDigit()).to.equal('boolean');
    });

    it('should return true if the string is a digit(one number)', () => {
      expect(singleDigit.isDigit()).to.equal(true);
      expect(doubleDigit.isDigit()).to.equal(false);
    });
  });

  describe('doubleCheck', () => {
    const doubleString = 'terrible',
      noDoubles = '21plics';

    it('should return a Boolean', () => {
      expect(typeof doubleString.doubleCheck()).to.equal('boolean');
    });

    it('should return true if the string contains double characters', () => {
      expect(doubleString.doubleCheck()).to.equal(true);
    });

    it('should return false for strings with no repeating characters', () => {
      expect('  '.doubleCheck()).to.equal(true);
    });

    it('should return true if the string contains double spaces', () => {
      expect(noDoubles.doubleCheck()).to.equal(false);
    });
  });
});
