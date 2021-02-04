class Round {
  constructor(deck) {
    this.cards = deck.currentCards;
    this.currentCard = this.cards[0];
    this.turnCount = 0;
    this.incorrectGuesses = 0;
  }

  returnCurrentCard = () => this.currentCard;

  takeTurn = (guess) => {
    let newTurn = new Turn(guess, this.currentCard);
    if(!newTurn.evaluateGuess()) {
      this.incorrectGuesses++;
    }
    this.turnCount = this.turnCount + 1;
    this.cards.shift();
    this.currentCard = this.cards[0];
  }

  calculatePercentCorrect = () => {
    let guessesCorrect = this.turnCount - this.incorrectGuesses;
    return `${((this.incorrectGuesses / this.turnCount) * 100).toFixed(2)}%`;
  }

  endRound = () => {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`;
  }

}

const Turn = require('../src/Turn');
module.exports = Round;
