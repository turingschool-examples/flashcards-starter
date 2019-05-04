class Turn {
  constructor(userGuess, newCard) {
    this.guess = userGuess,
    this.userCard = newCard
  }

  returnGuess(){
    return (this.guess);
  }
  returnCard(){
    return (this.userCard);
  }

  evaluateGuess(){
    return (this.guess === this.userCard.correctAnswer ? true : false);
  }

  giveFeedback(){
    return  (this.evaluateGuess() ? 'Correct!' : 'Incorrect!');
  }
}
module.exports = Turn;
