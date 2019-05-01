const Turn = require('../src/Turn');

class Round {
  constructor(deck, playerGuess) {
    //create the inherent OBJECT here
    this.deck = deck === undefined ? [] : deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.playerGuess = playerGuess;
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess, card) {
    this.turns++;
    const turn = new Turn(guess, card);
    //turn.evaluateTurn(guess);
    //method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
    //The turns count is updated, regardless of whether the guess is correct or incorrect
    //The next card becomes current card
    //Guess is evaluated / recorded. Incorrect guesses will be stored(via the id) in an array of incorrectGuesses - turn.evaluateGuess();
    //Feedback is returned regarding whether the guess is incorrect or correct - turn.giveFeedback();


  }

  calculatePercentCorrect() {
    //method that calculates and returns the percentage of correct guesses
  }

  endRound() {
    //method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
}

};

module.exports = Round;