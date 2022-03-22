const Card = require('../src/Card');

class Deck {
  constructor(cards) {
    this.cards = cards;
  }
  //HOW TO FILTER OUT ANYTHING IN THE ARRAY THAT'S NOT A CARD?
  // filterCards() {
  //   const result = this.cards.filter(card => card instanceof Card)
  //   this.filteredCards = result
  //   console.log(this.filteredCards)
  // }
  countCards() {
    return this.cards.length
  }
};

module.exports = Deck;
