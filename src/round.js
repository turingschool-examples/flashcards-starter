class Round {
  constructor(currentDeck, newTurn) {
    this.newTurn = newTurn;
    this.currentDeck = currentDeck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }

  returnCurrentCard() {
    return this.currentDeck.cards[0];
  }

  takeTurn() {
    this.turns += 1;
  }
}

module.exports = Round;
