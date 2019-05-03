const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');

class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.isCorrect = false;
  }

  returnGuess(guess) {
    return this.guess;
  }

  returnCard(card) {
    return this.card;

  }
  evaluateGuess(guess, card) {
    if(this.guess === this.card.correctAnswer) {
      this.isCorrect = true;
    }
  }
  giveFeedback(){
    if(this.isCorrect === true) {
      return "Correct!"
    }else{
      game.incorrectCardIds.push(this.card.id);
      return "Incorrect!"
    }
  }
}

module.exports = Turn;