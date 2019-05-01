class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck || {};
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cardDeck[this.turns];
  }

  takeTurn(userGuess) {
    this.turnCounter();
    let turn = this.createNewTurn(userGuess);
    if (turn.evaluateGuess()) {
      this.correctGuesses.push(this.currentCard.id);
      return turn.giveFeedback();
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
    }
  }

  createNewTurn(userGuess) {
    return new Turn(userGuess, this.returnCurrentCard());
  }

  turnCounter() {
    this.turns++;
  }

  calculatePercentCorrect() {
    return `${Math.floor((this.incorrectGuesses.length / this.turns) * 100)}%`;
  }
}

module.exports = Round;