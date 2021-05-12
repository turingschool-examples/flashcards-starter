const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    // this.currentCard;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    // this.currentCard = this.deck.cards[this.turns];
    return this.currentCard;
  }

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    // The turns count is updated, regardless of whether the guess is correct or incorrect

    this.turns++;

  // When a guess is made, a new Turn instance is created.

    const turn = new Turn (guess, this.currentCard);

  // The next card becomes current card

    this.currentCard = this.deck.cards[this.turns];
    // this.deck.cards.shift();
    // this.currentCard = this.deck.cards[0];

  // Guess is evaluated/recorded. Incorrect guesses will be stored (via the id) in an array of incorrectGuesses
  // Feedback is returned regarding whether the guess is incorrect or correct

  //   if (turn.evaluateGuess() === true) {
  //     return `correct!`;
  //   } else {
  //     this.incorrectGuesses.push(guess);
  //     return `incorrect!`;
  //   }
  // }

    if (guess === this.deck.cards.correctAnswer) {
      return `correct!`;
    } else {
      this.incorrectGuesses.push(guess);
      return `incorrect!`;
    }
  }

  calculatePercentCorrect() {
    const correctGuesses = this.turns - this.incorrectGuesses.length;
    const percentCorrect = correctGuesses * this.turns;
    return percentCorrect;
  }

  endRound() {
    return `** Round over! ** You answered ` + this.calculatePercentCorrect() + `% of the questions correctly!`
  }
}

module.exports = Round;

// npm test test/Round-test.js
