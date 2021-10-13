class Turn {
  constructor(userGuess, currentCard) {
    this.userGuess = userGuess;
    this.currentCard = currentCard;
  }

  returnGuess() {
    return this.userGuess;
  }

  returnCard() {
    return this.currentCard;
  }

  evaluateGuess() {
    const guessLowered = this.userGuess.toLowerCase();
    // Sad Paths to attend to in future:
      // check if guess is empty?
        // not sure yet if it will be empty string or undefined. Once sorted, add conditional here.
      // check if guess is none of the possible answers.
    if (guessLowered === this.currentCard.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback() {
    let feedback = 'incorrect!';
    if (this.evaluateGuess()) {
      feedback = 'correct!';
    }
    return feedback;
  }
}

module.exports = Turn;