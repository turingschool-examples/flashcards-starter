const Card = require("./Card")

class Deck {
  constructor(deckArray) {
    this.newDeck = deckArray 
  }
  countCards() {
    return this.newDeck.length
  }
}


module.exports = Deck 