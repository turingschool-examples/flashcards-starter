const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');

class Deck {
  constructor(card) {
    this.card = card;
  }

  countCards(card) {
    return this.card.length;
  }

}

module.exports = Deck;