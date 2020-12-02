const Card = require('../src/Card')

class Deck {
  constructor() {
    this.currentDeck = [];
  }

  createCard(cardID, question, answers, correctAnswer) {
    const card = new Card(cardID, question, answers, correctAnswer)
    return card
  }

  createDeck(card) {
    this.currentDeck.push(card)
    return this.currentDeck
  }

  countCards() {
    return this.currentDeck.length
  }
}

module.exports = Deck