const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Round = require('./Round');

class Turn {
  constructor(guess, card, round) {
    this.guess = guess;
    this.card = card;
    this.isCorrect = false;
    this.round = round;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
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
      this.round.incorrectCardIds.push(this.card.id);
      return "Incorrect!"
    }
  }
}

module.exports = Turn;