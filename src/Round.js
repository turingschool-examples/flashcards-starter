const Turn = require('../src/Turn')

class Round {
  // takes in responses, records guesses and if correct or Incorrect
  // currentCard should be the first Card in the Deck (array of Cards) at the start of the Round
  constructor() {

  }
  returnCurrentCard() {
  // returns current card being played
  // first Card in the Deck (array of Cards) at the start of Round
  }
  takeTurn() {
  // updates turns count, evaluates guesses, gives feedback, and stores ids of incorrect guesses
  // when a guess is made, new Turn instance is created and next card becomes current card
  }
  calculatePercentCorrect() {
  // calculates and returns percentage of correct guesses
  }
  endRound() {
  // prints '**Round over!** You answered <>% of the questions correctly'
  }
}

module.exports = Round;
