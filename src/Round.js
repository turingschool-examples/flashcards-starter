const Turn = require('../src/Turn');
const Game = require('../src/Game');

class Round {
  constructor(deck, game) {
    this.deck = deck || {cards: []};
    this.game = game;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    turn.evaluateGuess() ? null : this.incorrectGuesses.push(turn.card.id);
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    return Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns) * 100);
  }
  endRound() {
    let winLoss = this.calculatePercentCorrect();
    console.log(`** Round over! ** You answered ${winLoss}% of the questions correctly!`);
    this.game.roundCounter++;
    if (winLoss < 90) {
      game.roundCounter--;
      return;
    }
    if (this.game.roundCounter < prototypeQuestions.length) {
      this.game.start();
    } else {
      console.log('good job...go home, nerd.');
    }
  }
}

module.exports = Round;