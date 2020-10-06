const Turn  = require('../src/Turn.js');
const Game = require('../src/Game.js');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id);
    }
    this.turns += 1;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    const correctGuesses = this.deck.countCards() - this.incorrectGuesses.length;
    const percent = correctGuesses/this.deck.countCards();
    return Math.floor(percent*100);
  }

  endRound() {
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
