class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess(card) {
    if (this.guess === card.correctAnswer) {
      return true
    } else {
      return false
    }
  }

  giveFeedback(card) {
    if (this.guess === card.correctAnswer) {
      return 'Correct!'
    } else {
      return 'Incorrect!'
    }
  }
}

module.exports = Turn;


