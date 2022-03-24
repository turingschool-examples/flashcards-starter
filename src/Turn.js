class Turn {
  constructor(playerGuess, card) {
    this.playerGuess = playerGuess;
    this.card = card
  }

  returnGuess() {
    return this.playerGuess;

  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    // console.log('playerGuess', this.playerGuess)
    // console.log('card', this.card)
    if (this.playerGuess === this.card.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedBack() {
    if (this.evaluateGuess() === true) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}


module.exports = Turn;
