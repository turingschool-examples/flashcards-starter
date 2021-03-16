class Turn {
  constructor(userGuess, card) {
    this.userGuess = userGuess;
    this.card = card;
  }
  returnGuess() {
    //return the guess
  }

  returnCard() {
    //return the card
  }

  evaluateGuess() {
    // returns a boolean indicating if the user's guess matches
    // the correct answer on the card
  }

  giveFeedback() {
    //returns either incorrect! or correct! based on whether
    // the guess is correct or not
  }
}

module.exports = Turn;