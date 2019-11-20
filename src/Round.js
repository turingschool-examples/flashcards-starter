class Round {
  constructor(deck) { 
    this.deck = deck;
    this.turns = 0;
  }
  returnCurrentCard() {
    for (var i = 0; i < this.deck.length; i++) {
      return this.deck[i]
    }
  }
  takeTurn() {
    this.turns++
  }
}

module.exports = Round