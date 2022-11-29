class Turn {
  constructor(usersAnswer, currentCard) {
    this.usersAnswer = usersAnswer;
    this.currentCard = currentCard;
  }

  returnGuess() {
    return this.usersAnswer = 'pug';
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    return false;
  }

  giveFeedback() {
    return 'incorrect!';
  }
}


module.exports = Turn;