const Game = require('./Game');
const Card = require('./Card');

let currentCard = new Card();

class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.cardInPlay = currentCard;
  }
  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.cardInPlay;
  }

  evaluateGuess() {
    let result = false;
    if (this.guess === this.cardInPlay.correctAnswer) {
      result = true;
      return result;
    }
  }

  giveFeedback() {
    if (this.evaluateGuess() === true) {
      return `Correct!`;
    }
    return `Incorrect!`;
  }
}
console.log(currentCard);

module.exports = Turn;












 //Your Turn class should meet the following requirements:
 // Instantiated with two arguments - a string (that represents a user’s guess
 // to the question), and a Card object for the current card in play.

 // returnGuess: method that returns the guess

 // returnCard: method that returns the Card

 // evaluateGuess: method that returns a boolean indicating if the
 // user’s guess matches the correct answer on the card

 // giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’
  //based on whether the guess is correct or not.
