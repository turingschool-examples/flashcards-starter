class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck;
    this.currentCard = this.deck[this.round];
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(userGuess) {
    turnCounter();
    const turn = new Turn(userGuess, this.currentCard);
    if (turn.evaluateGuess()) {
      this.correctGuesses.push(this.currentCard.id);
      return turn.giveFeedback();
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
    }
  }

  turnCounter() {
    this.turns++;
  }

  calculatePercentCorrect() {
    return `${Math.floor((this.incorrectGuesses.length / this.turns) * 100)}%`;
  }
}

module.exports = Round;