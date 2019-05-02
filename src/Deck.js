const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');

class Deck {
  constructor(cards) {
    this.cards = cards;
  }

  countCards(cards) {
    return this.cards.length;
  }

}

module.exports = Deck;