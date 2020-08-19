class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
   }
    returnGuess = () => this.guess;
    returnCard = () => this.card;
    evaluateGuess = () => {
      return this.guessResult = (this.guess === this.card.correctAnswer)
    }
    giveFeedback = () => {
      return this.guessResult ? 'correct!' : 'incorrect!';
    }
  }
module.exports = Turn;