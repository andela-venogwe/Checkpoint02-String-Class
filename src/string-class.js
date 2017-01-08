/**
 * Object that extends the string class prototype.
 */
const StringExtend = {
  /**
   * hasVowels
   * @returns {boolean} true or false
   * @description checks to see if the string contains vowels
   */
  hasVowels() {
    return /[aeiou]/i.test(this);
  },

  /**
   * toUpper
   * @returns {string} the uppercase string version
   * @description converts the string to uppercase
   */
  toUpper() {
    return this.replace(/[a-z]/g, letter =>
      String.fromCharCode(letter.charCodeAt(0) - 32)
    );
  },

  /**
   * toLower
   * @returns {string} the lowercase string version
   * @description converts the string to lowercase
   */
  toLower() {
    return this.replace(/[A-Z]/g, letter =>
      String.fromCharCode(letter.charCodeAt(0) + 32)
    );
  },

  /**
   * ucFirst
   * @returns {string} a string with uppercase firt letter
   * @description turns the first letter of a string to uppercase
   */
  ucFirst() {
    return /[a-z]/.test(this[0]) ? (this
    .replace(/[a-z]/, letter => letter.toUpper())) : this.slice(0);
  },

  /**
   * isQuestion
   * @returns {boolean} true or false
   * @description checks if a string is a question
   */
  isQuestion() {
    return /\?$/.test(this);
  },

  /**
   * words
   * @returns {object} an array of words
   * @description show an array of the words in a string
   */
  words() {
    return this.match(/[\w'_-?]+/g);
  },

  /**
   * wordCount
   * @returns {number} a neutral or positive integer
   * @description counts the number of words in a string
   */
  wordCount() {
    if (this.words() !== null) {
      return this.words().length;
    }
    return 0;
  },

  /**
   * toCurrency
   * @returns {string} a currency string
   * @description formats a string to currency
   */
  toCurrency() {
    if (!/^(\.|\d*\.?)(\d*)?\d$/.test(this)) {
      return 'invalid currency string';
    }
    const currencyString = this.split('.');
    const integer = currencyString[0] || '0';
    const fraction = parseFloat(`0.${currencyString[1]}`).toFixed(2)
      .slice(1);
    return `${integer.replace(/(\d)(?=(\d{3})+(?!\d))/, '$1,')}${fraction}`;
  },

  /**
   * fromCurrency
   * @returns {number} a number in currency format
   * @description formats a currency string to number
   */
  fromCurrency() {
    return /^(\.|\d*\.?)(\d*)?\d$/
    .test(this) ? +this : 'invalid currency string';
  },

  /**
   * inverseCase
   * @returns {string} inverted string case
   * @description inverts a string's letter casing
   */
  inverseCase() {
    return this.replace(/[a-zA-Z]/g, letter =>
      (/[a-z]/.test(letter) ? letter.toUpper() : letter.toLower())
    );
  },

  /**
   * alternatingCase
   * @returns {string} string with alternating case
   * @description alternates string letters case
   */
  alternatingCase() {
    return this.split(' ').map(word => (word
    .replace(/[a-z]/gi, (letter, index) =>
      (index % 2 === 0 ? letter.toLower() : letter.toUpper())
    ))).join(' ');
  },

  /**
   * getMiddle
   * @returns {string} a string
   * @description gets the mid-character(s) of a string
   */
  getMiddle() {
    const length = this.length;
    if (length % 2 === 0) {
      return this.slice((length / 2) - 1, (length / 2) + 1);
    }
    return this[parseInt((length / 2), 10)];
  },

  /**
   * numberWords
   * @returns {String} the numbers in words
   * @description converts each numeral in number to word equivalent
   */
  numberWords() {
    if (/\D/.test(this)) {
      return 'invalid characters present in number(s) string';
    }
    const numbersAsString = ['zero', 'one', 'two', 'three', 'four', 'five',
      'six', 'seven', 'eight', 'nine'
    ];
    return this.replace(/\d/g, number => `${numbersAsString[number]} `).trim();
  },

  /**
   * isDigit
   * @returns {boolean} true or false
   * @description checks string is a digit
   */
  isDigit() {
    return /^\d{1}$/g.test(this);
  },

  /**
   * doubleCheck
   * @returns {boolean} true or false
   * @description check if string contains doubly-repeating characters
   */
  doubleCheck() {
    return /(.)\1{1}/.test(this);
  }
};

Object.assign(String.prototype, StringExtend);
