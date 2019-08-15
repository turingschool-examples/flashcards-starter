class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess () {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    let correctGuess = (this.guess === this.card.correctAnswer) ? true : false;
    return correctGuess;
  }

  giveFeedback() {
    let feedback = (this.evaluateGuess()) ? 'correct!' : 'incorrect!';

    return feedback;
  }
}

module.exports = Turn;