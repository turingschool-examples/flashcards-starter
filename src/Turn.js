const Card = require('../src/Card');
const card = new Card();
class Turn{
  constructor(guess, card){
    this.guess = guess;
    this.card = card;
  }
  returnGuess(){
    return this.guess;
  }
  returnCard(){
    return this.card;
  }
  evaluateGuess() {
    return this.guess === this.card.correctAnswer;
  }
  giveFeedback(){
    const correct = 'Correct!';
    const incorrect = 'Incorrect!';
    const feedBack = this.evaluateGuess() ? correct : incorrect;
    return feedBack;
  }
};
module.exports = Turn;
