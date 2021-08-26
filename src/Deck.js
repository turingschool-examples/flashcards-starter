const Card = require('./Card');

class Deck {
  constructor(currentDeck) {
    this.currentDeck = currentDeck;
  }

  countCards() {
    return this.currentDeck.length;
  }
}

module.exports = Deck;
