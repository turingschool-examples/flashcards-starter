const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const card = require('./Card');

class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.isCorrect = false;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.guess === card.correctAnswer) {
      this.isCorrect = true;
    }
  }

  giveFeedback() {
    if (this.isCorrect === true) {
      return "Correct!";
    } else {
      return "Incorrect!";
    }
  }

  // Instantiated with two arguments - a string that represents a user’s guess to the question, and a Card object for the current card in play.

    // returnGuess: method that returns the guess
    // returnCard: method that returns the Card
    // evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card
    // giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not

}

module.exports = Turn;


