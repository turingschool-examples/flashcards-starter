const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Round {
  constructor(cardDeck = [0]) {
    this.guesses = [];
    this.incorrectGuesses = [];
    this.turnCount = 0;
    this.currentCard = cardDeck[this.turnCount];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, card);
    this.turnCount++;
    this.currentCard = cardDeck[this.turnCount];
    if !(this.turn.evaluateGuess()) {
      this.incorrectGuesses.push(card.id);
    }
    this.incorrectGuesses.push(turn.evaluateGuess());
    turn.giveFeedback();
    this.guesses.push(turn.guess);
    this.guesses.push(turn.guess);
  }

  calculatePercentCorrect() {
    return Math.round((this.guesses.length / this.incorrectGuesses.length) * 100);
  };

  endRound() {
    console.log('** Round over! ** You answered <>% of the questions correctly!');
  };

}

module.exports = Round;
