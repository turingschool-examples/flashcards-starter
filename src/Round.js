const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');


class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck;
    // this.currentCard = this.deck.cards[0];
  }

  returnCurrentCard = () => {
    this.currentCard = this.deck.cards[0];
    return this.currentCard;
  }

}

module.exports = Round