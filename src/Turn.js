class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
   }
    returnGuess = () => this.guess;
    returnCard = () => this.card;
    evaluateGuess = () => this.guessResult = (this.guess === this.card.correctAnswer);
    giveFeedback = () => this.guessResult ? 'correct!' : 'incorrect!';
  }
module.exports = Turn;