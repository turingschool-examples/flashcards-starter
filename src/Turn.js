const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');


class Turn {
  constructor(guess, Card) {
    this.guess = guess;
    this.card = Card;
  }

  returnGuess(guess){
    return this.guess;
  }

  returnCard(card){
    return this.card;
  }

  evaluateGuess(guess){
    if(this.guess !== Card.correctAnswer){
      return false;
    } else {
      return true;
    }
  }

  giveFeedback(guess){
    if(this.guess === Card.correctAnswer){
      return 'Correct!';
    } else {
      return 'Incorrect!';
    }
  }
}

module.exports = Turn;
