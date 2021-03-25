const Card = require("./Card");

class Deck {
  constructor(cards = []) {
    this.cards = cards.map(card => {
      const {id, question, answers, correctAnswer} = card;
      const newCard = new Card(id, question, answers, correctAnswer)
      return newCard
    });
  }
  countCards() {
    return this.cards.length;
  }
}

module.exports = Deck;
