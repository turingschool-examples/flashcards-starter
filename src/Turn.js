class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess;
    this.currentCard = currentCard
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.currentCard
  }

  evaluateGuess() {
    const correctAnswer = this.currentCard.correctAnswer;
    const returnValue = this.userGuess === correctAnswer ? true : false;
    return returnValue;
  }

  giveFeeback() {
    const correctAnswer = this.currentCard.correctAnswer;
    const rightOrWrong = this.userGuess === correctAnswer ? 'correct' : 'incorrect';
    return rightOrWrong;
  }
}














module.exports = Turn
