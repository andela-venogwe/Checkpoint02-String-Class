const chai= require('chai');
const expect = chai.expect, assert = chai.assert, should = chai.should();

describe('String Class', () => {
  describe('hasVowels', () => {
    it('should return a Boolean', () => {
      'ddfgnmpl'.hasVowels().should.be.a('boolean');
      'aydfccg'.hasVowels().should.be.a('boolean');
    });

    it('should return true if the string contains vowels', () => {
      assert.equal('aydfccg'.hasVowels());
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
      expect('DDFGNMPL'.toUpper()).to.equal('ddfgnmpl');
    });
  });
// ucFirst (typeof String): Returns the String in question but changes the First Character to an Upper case. 
  describe('ucFirst', () => {
    it('should return a String', () => {
      'ddfgnmpl'.hasVowels().should.be.a('string');
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
      assert.equal('are you a question ?'.isQuestion());
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
      assert.equal(Array.isArray('hello says the devil'.words()));
    });

    it('should return a list of the words in the string', () => {
      expect('hello says the devil'.words())
      .to.equal(['hello', 'says', 'the', 'devil']);
    });
  });
  //wordCount (typeof Number): Returns the number of words in the string.
  describe('wordCount', () => {
    it('should return a Number', () => {
      'hello says the devil'.word().should.be.a('number');
    });

    it('should return the number of words in the string', () => {
      'hello says the devil'.word().should.equal(4);
      ''.word().should.equal(0);
    });
  });

  //toCurrency (typeof String): Returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11.
});