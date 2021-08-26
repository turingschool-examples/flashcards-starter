const Card = require('../src/Card');

class Turn{
  constructor(guess, cardInPlay){
    this.guess = guess;
    this.cardInPlay = cardInPlay;
  }

  returnGuess(){
    return this.guess;
  }

  returnCard(){
    return this.cardInPlay;
  }

  evaluateGuess(){
    if(this.guess === this.cardInPlay.correctAnswer){
      return true;
    }else{
      return false;
    }
  }

  giveFeedback(){
    // this.evaluateGuess();
    if(this.evaluateGuess() === true){
      return 'Correct!';
    }else{
      return 'Incorrect!';
    }
  }
};

module.exports = Turn;
