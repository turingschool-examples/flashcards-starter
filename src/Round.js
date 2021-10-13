const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turnsCount = 0;
    this.currentCard = this.deck[0];
    this.turns = [];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    this.turns.push(turn);
    turn.evaluateGuess();
    if (!turn.isCorrect) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turnsCount++;
    this.currentCard = this.deck[this.turnsCount];
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let correctAnswers = this.turns.length - this.incorrectGuesses.length;
    let totalAnswers = this.turns.length;
    return Math.floor((correctAnswers / totalAnswers) * 100);
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
