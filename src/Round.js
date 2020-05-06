const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');


class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.currentCard = this.deck[0];
  }

  returnCurrentCard = () => {
    this.currentCard = this.deck[this.turns]
    return this.currentCard[0]
  }

}

module.exports = Round