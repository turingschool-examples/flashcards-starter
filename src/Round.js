const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');


class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = this.deck.cards[this.turns];
  }

  returnCurrentCard = () => {
    return this.currentCard[this.turns];
  }

  takeTurn = () => {
    this.turns++;
  }

}

module.exports = Round