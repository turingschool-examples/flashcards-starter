// const Deck = require('../src/Deck');
class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cardsArray[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    this.turns ++;
    // for (var i = 0; i < this.deck.lenght; i++) {
      if (guess === this.currentCard) {
      return 'correct';
      } else {
      return 'incorrect';
      this.incorrectGuesses.push(this.deck)
      }
    // }
  }





// When a guess is made, a new Turn instance is created.
  // turn.returnGuess()
  // const card2 = this.deck.forEach((element) => {});
// The turns count is updated, regardless of whether the guess is correct or incorrect

//The next card becomes current card
// deck.forEach((element) => {});
// Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
  // turn.evaluateGuess()
// Feedback is returned regarding whether the guess is incorrect or correct
  // turn.giveFeedback()
  // }
};
module.exports = Round;
