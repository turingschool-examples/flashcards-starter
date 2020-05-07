/*
Your Turn class should meet the following requirements:

Instantiated with two arguments - a string 
  (that represents a user’s guess to the question), 
  and a Card object for the current card in play.

returnGuess: method that returns the guess

returnCard: method that returns the Card

evaluateGuess: method that returns a boolean indicating 
  if the user’s guess matches the correct answer on the card

giveFeedback - method that returns either 
  ‘incorrect!’ or ‘correct!’ based on whether 
  the guess is correct or not.
*/
const Card = require('./Card');

class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
    return((this.card.correctAnswer === this.guess) ? true : false); 
  }
  giveFeedBack() {
    let isCorrectAnswer = this.evaluateGuess();
    // refactor to ternary operator
    if (isCorrectAnswer) {
      return "correct";
    } else {
      return "incorrect";
    }
  }
}


module.exports = Turn;