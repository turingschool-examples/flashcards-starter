class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }
  returnGuess() {
    return this.guess
  }

  returnCard() {
    return this.card
  }

  evaluateGuess(guess, correctAnswer) {
    if (guess === correctAnswer.correctAnswer) {
      return true;
    } else {
      return false;
    }
  }

  giveFeedback(guess, answer) {
    if (guess === answer.correctAnswer) {
      return 'correct!';
    } else if (guess !== answer) {
      return 'incorrect!';
    }
  }
}



module.exports = Turn;
