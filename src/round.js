class Round {
  constructor(currentDeck) {
    this.currentDeck = currentDeck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }
  returnCurrentCard() {
    return this.currentDeck.cards[0];
  }
}

module.exports = Round;
