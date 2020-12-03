'use strict'

class Deck {
  constructor() {
    this.currentDeck = [];
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