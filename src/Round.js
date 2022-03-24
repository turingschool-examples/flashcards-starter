const Turn = require('../src/Turn');
const Card = require('../src/Card');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(guess) {
    var currentCard = this.deck.cards[0];
    var guess = guess;
    var turn = new Turn(guess, currentCard);
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.deck.cards[0].id)
    }
    this.deck.cards.shift();
    this.turns += 1;
    return turn.giveFeedback();
    }

  calculatePercentCorrect() {
    var percentCorrect = 100 - ((this.incorrectGuesses.length / this.turns) * 100);
    return percentCorrect;
  }

  endRound() {
    var correctGuesses = this.calculatePercentCorrect();
    console.log(`** Round over! ** You answered ${correctGuesses}% of the questions correctly!`)
    // return process.exit()
  }
}

module.exports = Round;
