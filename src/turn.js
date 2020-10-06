class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  };

  returnGuess() {
    // return string 
  };

  returnCard() {
    // return card object
  };

  evaluateGuess() {
    // return boolean
  };

  giveFeedback() {
    // correct! or incorrect!
  };
};

module.exports = Turn;
