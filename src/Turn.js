class Turn{
  constructor(inputUserGuess, card){
      this.userGuess = inputUserGuess;
      this.card = card;
      this.userIsCorrect = false;
  }
  returnGuess(){
    return this.userGuess;
  }
  returnCard(){
    return this.card;
  }
  evaluateGuess(){
    if (this.userGuess === this.card.correctAnswer) {
      return this.userIsCorrect = true;
    } else {
      return this.userIsCorrect = false;
    }
  }
  giveFeedback(){
    if (this.userIsCorrect === true) {
      return console.log("correct!")
    } else {
      return console.log("incorrect!")
    }
  }
}

module.exports = Turn;
