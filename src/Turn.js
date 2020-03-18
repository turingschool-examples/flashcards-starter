class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }
  returnGuess() {
  // returns the guess
  return this.guess;
  }
  returnCard() {
  // returns the Card
  return this.card;
  }
  evaluateGuess() {
  // returns a boolean indicating if the user's guess matches the correct answer on the card
  if (this.guess === this.card.answer) {
    return true;
  } else {
    return false;
  }
  }
  giveFeedback() {
  // returns incorrect or correct based on guess
  if (this.guess === this.card.answer) {
    return 'Correct!';
  } else {
    return 'Incorrect!';
  }
  }
}

module.exports = Turn;
