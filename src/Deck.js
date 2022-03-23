const Card = require('../src/Card');

class Deck {
  constructor(cards) {
    this.cards = this.filterCards(cards)
  };

  filterCards(constructorCards) {
    let result = [];
    if (constructorCards) {
      result = constructorCards.filter(card => card instanceof Card)
    };
    return result;
  };
  
  countCards() {
    return this.cards.length;
  };
};

module.exports = Deck;
