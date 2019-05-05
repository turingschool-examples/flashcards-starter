const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');


class Turn {
  constructor(guess) {
    this.guess = guess;
  }

  returnGuess(input){
    return this.guess = input;
  }

  returnCard(id, question, answers, correctAnswer ){
    this.card = new Card(id, question, answers, correctAnswer);
    return this.card;
  }

  evaluateGuess(){
    if(this.guess !== Card.correctAnswer){
      return this.giveFeedback(false);
    } else {
      return this.giveFeedback(true);
    }
  }

  giveFeedback(answerInput){
    if(answerInput === Card.correctAnswer){
      return 'Correct!';
    } else {
      return 'Incorrect!';
    }
  }
}

module.exports = Turn;
