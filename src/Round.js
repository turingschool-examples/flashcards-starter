// const Deck = require('../src/Deck');
class Round {
  constructor(deck) {
    this.currentCard = deck.cardsArray[0];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
};
module.exports = Round;
