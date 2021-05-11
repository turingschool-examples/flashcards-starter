class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
  // When a guess is made, a new Turn instance is created.

      // let turn = new Turn(guess, card);

  // The turns count is updated, regardless of whether the guess is correct or incorrect

      this.turns++;

  // The next card becomes current card

      // this.currentCard = deck.cards[++];

  // Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses

  // Feedback is returned regarding whether the guess is incorrect or correct

    //if (guess === this.deck.cards.correctAnswer) {
    //   return `correct!`;
    // } else {
    //   return `incorrect!`;
    // }
}

  calculatePercentCorrect() {

  }

  endRound() {

  }
}


module.exports = Round;

// npm test test/Round-test.js
