class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.card = currentCard;
<<<<<<< HEAD
=======
    this.isCorrect = null;
>>>>>>> ef76c2292a58424158cb30941d46b0f03b45a8f3
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.card;
  }
  evaluateGuess() {
<<<<<<< HEAD
    return this.card.correctAnswer === this.guess ? true : false;
  }
  giveFeedback() {
    return this.evaluateGuess() ? 'correct!' : 'incorrect!';
  }
};

module.exports = Turn
=======
    if (this.card.correctAnswer === this.guess) {
      this.isCorrect = true
    }
    else {
      this.isCorrect = false
    }
  }
  giveFeedback() {
    return this.isCorrect === true ? 'correct!' : 'incorrect!'
  }
}
>>>>>>> ef76c2292a58424158cb30941d46b0f03b45a8f3
