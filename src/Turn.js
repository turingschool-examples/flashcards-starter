class Turn {
  constructor(guess, card){
    this.guess = guess;
    this.cardObject = card
  }

  returnGuess(){
    return this.guess  
  }

  returnCard(){
    return this.card
  }

  evaluateGuess(){
    return this.guess === this.card.correctAnswer
  }

  giveFeedback(){
    if (!this.evaluateGuess()) {
      return 'incorrect!';
    } else {
      return 'correct!'
    }
  }
}

module.exports = Turn;