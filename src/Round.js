class Round {
  constructor(deck, turn) {
    this.deck = deck;
    this.turn = turn;
  }
  returnCurrentCard() {
    return this.turn.returnCard()
  }
}

module.exports = Round;
