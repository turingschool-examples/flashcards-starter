const Turn = require('../src/Turn');

class Round {
  constructor(deck, turn) {
    //create the inherent OBJECT here
    this.deck = deck === undefined ? [] : deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.playerGuess = turn.guess;
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess, card) {
    const turn = new Turn(guess, this.returnCurrentCard());
    this.turns++; //needs to be below the instantiation, or it'll skip Card #1

    
    if (turn.evaluateGuess() === false) {
      //push the false ones' ids into the array
      this.incorrectGuesses.push(turn.card.id)
    }

    
    //method that updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
    //The next card becomes current card
    //Guess is evaluated / recorded. Incorrect guesses will be stored(via the id) in an array of incorrectGuesses - turn.evaluateGuess();
    //Feedback is returned regarding whether the guess is incorrect or correct - turn.giveFeedback();

    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    //method that calculates and returns the percentage of correct guesses
  }

  endRound() {
    //method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’
}

};

module.exports = Round;