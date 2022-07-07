class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.card = currentCard;
    this.isCorrect = null;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    if (this.guess === this.card.correctAnswer) {
        this.isCorrect = true;
        return true;
    } else {
        this.isCorrect = false;
        return false;
    }
  }

  giveFeedback() {
    if (this.isCorrect) {
        return 'Correct!';
    } else {
        return 'Incorrect!';
    }
  }

}


module.exports = Turn;