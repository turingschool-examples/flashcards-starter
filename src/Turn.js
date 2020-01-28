class Turn{
  constructor(guess,card){
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
    return this.card.correctAnswer === this.guess;
  }
  giveFeedback(){
    switch (this.evaluateGuess()) {
      case true:
        return 'Correct!';
        break;
      case false:
        return 'Incorrect!';
        break;
      default:
    }
  }
}
module.exports = Turn;
