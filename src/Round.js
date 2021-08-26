
const Turn = require("./Turn.js");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.wrongGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    turn.evaluateGuess();
    if (!turn.evaluateGuess()) {
      this.wrongGuesses.push(this.returnCurrentCard().id);
    }
    this.deck.cards.shift();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return (1 - this.wrongGuesses.length / this.turns).toFixed(2) * 100;
  }

  endRound() {
    console.log(`*** Round over!*** You answered ${this.calculatePercentCorrect()}% of the questions right!`);
  }

  startNewGame(){
    console.log('******************GOOD JOB! LET\' S START A NEW ROUND!******************')
    const Game = require("./Game");
    let game = new Game;
    game.start()
  }
}

module.exports = Round;
