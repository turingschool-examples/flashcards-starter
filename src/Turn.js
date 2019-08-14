class Turn {
  constructor(guess, cardObj) {
    this.guess = guess;
    this.cardObj = cardObj;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.cardObj;
  }
  evaluateGuess() {
    return this.guess === this.cardObj.correctAnswer ? true : false;
  }
  giveFeedback() {
    return this.guess === this.cardObj.correctAnswer ? ("correct!") : ("incorrect!");
  }
}

module.exports = Turn;



// returnCard: method that returns the Card
// evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card
// giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.