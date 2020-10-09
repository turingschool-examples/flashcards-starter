class Round {
  constructor(deck) {
    this.deck = deck;
  }
  
  returnCurrentCard() {
    return this.deck[0]
  }
}

module.exports = Round;