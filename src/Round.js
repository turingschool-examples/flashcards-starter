const Turn = require('../src/Turn');
class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cardsArray[0];
    // Current card always must be in the index 0
    // if the index zero card have been already answer must change from the place and take the next index from the array to become in the index 0
    // how ? Where ? returnCurrentCard();
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    // for (var i = 0; i < this.deck.length; i++) {
      // if (this.currentCard[0] === this.deck[0]) {
        this.currentCard = turn.forEach(element => {
          element !== this.deck[0]
          this.currentCard = this.deck[0]
          return this.currentCards
        });
      // }
    }
  }
  takeTurn(guess) {
    this.turns ++;
    // if (this.currentCard.id === )
    const turn = new Turn(guess, this.currentCard);
    if (turn.giveFeedback() === 'correct') {
      this.incorrectGuesses.push(this.currentCard.id); // I need to store the id of the current card, how can I do that ?
    }
    return turn.giveFeedback()
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
