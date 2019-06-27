const data = require('./data')


class Turn {
  constructor(guess, card) {
    this.card = card;
    this.guess = guess;
  }
  returnGuess(){
    return this.guess;

  }

  returnCard(){
    return this.card
  }

  evaluateGuess(){
    if(this.guess === this.card.correctAnswer ){
      return true;
    } else{
      return false;
    }
  }

  giveFeedback(){
    if(this.evaluateGuess() === true){
      return 'correct'
    } else{
      return 'incorrect'
    }
  }
}

module.exports = Turn;