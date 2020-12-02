const Card = require('../src/Card')

class Deck {
  constructor() {
    this.currentDeck = [];
  }

  createDeck(cardID, question, answers, correctAnswer) {
    const card = new Card(cardID, question, answers, correctAnswer)
    this.currentDeck.push(card)
    return this.currentDeck
  }

  countCards() {
    return this.currentDeck.length
  }
}

module.exports = Deck