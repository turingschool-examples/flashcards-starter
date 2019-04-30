class Round {
  constructor(deck) {
    this.deck = deck || [];
    this.turns = 0;
  }
  returnCurrentCard() {
    return this.deck.card[this.turns]
  }
}

module.exports = Round
