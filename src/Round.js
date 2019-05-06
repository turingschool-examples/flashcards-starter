const Turn = require('../src/Turn');
const data = require('./data');
const prototypeQuestions = data.prototypeData;

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
      this.game.roundCounter--;
      console.log(`Unfortunately, ${winLoss}% is not good enough. git tryAgain --force ... try HARDER.`);
      '....'.split('').forEach(dot => console.log(dot.padStart(10)));
    }
    if (this.game.roundCounter < prototypeQuestions.length) {
      this.game.start();
    } else {
      console.log('good job...go home, nerd.');
    }
  }
}

module.exports = Round;