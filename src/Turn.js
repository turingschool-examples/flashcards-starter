class Turn {
  constructor(guess, cardInfo){
    this.guess = guess;
    this.cardInfo = cardInfo;
  }

  returnGuess(){
    return this.guess;
  }

  returnCard(){
    return this.cardInfo;
  }

  evaluateGuess(){
    if (this.guess === this.cardInfo.correctAnswer){
      return true;
    }
    return false;
  }

  giveFeedback(){
    if (this.evaluateGuess()){
      return 'correct!';
    }
    return 'incorrect!';
  }
}

module.exports = Turn;
