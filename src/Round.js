class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuess = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }
}

module.exports = Round;
