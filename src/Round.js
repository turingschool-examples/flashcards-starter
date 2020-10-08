class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.round = null;
  }
  returnCurrentCard() {
    return this.deck.cards[0]
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.deck.cards[0]);
    turn.evaluateGuess() === false ? this.incorrectGuesses.push(turn.card.id) : null;
    this.turns += 1;
    this.deck.cards.shift();
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    return Math.round(100 - (this.incorrectGuesses.length / this.turns) * 100);
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}


module.exports = Round;
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
