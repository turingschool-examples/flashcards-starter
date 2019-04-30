class Turn {
  constructor(guess) {
    this.guess = guess;
    this.isCorrect = false;
  }

  returnGuess(guess) {
    return this.guess;
  }

  returnCard(card) {
    return card;

  }
  evaluateGuess(guess, card) {
    if(this.guess === card.correctAnswer){
      this.isCorrect = true;
    }else{
      this.isCorrect = false;
    }
  }
  giveFeedback(){
    if(this.isCorrect === true) {
      return "Correct!"
    }else{
      return "Incorrect!"
    }
  }
}

module.exports = Turn;