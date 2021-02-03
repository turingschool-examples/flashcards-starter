const Turn = require('../src/Turn');
class Round {
  constructor(deck = []) {
    this.deck = deck
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    const currentCard = this.deck[0];
    return currentCard;
  }

  takeTurn(guess) {
    this.turns ++;
    const lastCard = this.deck.shift();
    const currentTurn = new Turn(guess, lastCard);
    this.deck.push(lastCard);
    if (currentTurn.evaluateGuess()) {
      return currentTurn.giveFeedback();
    } else {
      this.incorrectGuesses.push(lastCard.id);
      return currentTurn.giveFeedback();
    }
  }

  calculatePercentCorrect() {
    if (this.turns > 0) {
      const incorrect = (this.incorrectGuesses / this.turns);
      const correct = 1 - incorrect;
      return correct * 100;
    } else {
      return 0;
    }
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}
module.exports = Round;