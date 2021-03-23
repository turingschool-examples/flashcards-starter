const Card = require('../src/Card');

class Deck {
  constructor(inputArray) {
    this.cards = [];
    inputArray.forEach(card =>
      this.cards.push(new Card(card.id, card.question, card.answers, card.correctAnswer)));
  }
}

module.exports = Deck;
