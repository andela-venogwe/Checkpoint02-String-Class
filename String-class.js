/* eslint-disable no-await-in-loop*/
const StringExtend = {
  hasVowels() {
    return /[aeiou]/i.test(this);
  },

  toUpper() {
    return this.replace(/[a-z]/g, letter =>
      String.fromCharCode(letter.charCodeAt(0) - 32)
    );
  },

  toLower() {
    return this.replace(/[A-Z]/g, letter =>
      String.fromCharCode(letter.charCodeAt(0) + 32)
    );
  },

  ucFirst() {
    return this.replace(/[a-z]/, letter => letter.toUpper());
  },

  isQuestion() {
    return /\?$/.test(this);
  },

  words() {
    return this.match(/(\w+)|\w+/g);
  },

  wordCount() {
    if (this.words() !== null) {
      return this.words().length;
    }
    return 0;
  },

  toCurrency() {
    const currencyString = this.replace(/[^\d.]/gi, '').split('.');
    const integer = currencyString[0] || 0;
    const fraction = currencyString[1] || '00';
    return `${integer.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}.${fraction}`;
  },

  fromCurrency() {
    return +this.replace(/,*/g, '');
  },

  inverseCase() {
    return this.replace(/[a-zA-Z]/g, letter =>
      (/[a-z]/.test(letter) ? letter.toUpper() : letter.toLower())
    );
  },

  alternatingCase() {
    return this.trim().split(' ').map(word => (word.replace(/[^a-z]/gi, '')
      .replace(/[a-z]/gi, (letter, index) =>
        (index % 2 === 0 ? letter.toLower() : letter.toUpper())
      ))).join(' ');
  },

  getMiddle() {
    const length = this.length;
    if (length % 2 === 0) {
      return this.slice((length / 2) - 1, (length / 2) + 1);
    }
    return this[parseInt((length / 2), 10)];
  },

  numberWords() {
    const numbersAsString = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine'
    };
    return this.replace(/\D+/g, '')
    .split('')
    .map(number => numbersAsString[number])
    .join(' ');
  },

  isDigit() {
    return /^\d{1}$/g.test(this);
  },

  doubleCheck() {
    return /(.)\1{1}/.test(this);
  }
};

Object.assign(String.prototype, StringExtend);
