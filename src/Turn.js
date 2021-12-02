class Turn{
  constructor(inputUserGuess, card){
      this.userGuess = inputUserGuess;
      this.card = card;
      this.userIsCorrect;
  }
  returnGuess(){
    return this.userGuess;
  }
  returnCard(card){
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
      return "correct!";
    } else {
      return "incorrect!";
    }
  }
}

module.exports = Turn;
