const Card = require('../src/Card');

class Turn {
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

evaluateGuess(){
  if(this.guess === this.card.correctAnswer){
    return true;
  } else {
    return false;
  }
}

giveFeedback(){
  if(this.evaluateGuess()) {
    return 'You are correct!'
  } else {
    return 'You are incorrect!'
  }
}
}
module.exports = Turn;
