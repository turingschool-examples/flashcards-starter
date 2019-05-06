const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');

class Deck {
  constructor(cardArray) {
    this.cardArray = cardArray || [];
  }
  countCards() {
    return this.cardArray.length
  }
}

module.exports = Deck;