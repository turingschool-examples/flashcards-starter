class Turn {
  constructor(userGuess, currCard) {
    this.guess = userGuess;
    this.card = currCard;
  }

  returnGuess() {
    return this.guess;
  };

  returnCard() {
    return this.card;
  };

  evaluateGuess() {
    return this.guess === this.card.correctAnswer;
  };

  returnFeedback(){
    if(this.evaluateGuess()) {
      return 'correct!';
    } else {
      return 'incorrect!'
    }
  };
};


module.exports = Turn;
