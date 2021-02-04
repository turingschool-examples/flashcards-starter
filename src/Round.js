
const Turn = require('./Turn');
//const Game = require('./Game');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = []
    this.currentCard = this.deck[0];
  }

  takeTurn(userGuess) {
    this.turn = new Turn(userGuess, this.currentCard);
    if (!this.turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns++;
    this.currentCard = this.deck[this.turns];
    return this.turn.giveFeedback();
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  calculatePercentCorrect() {
    const percentage = (this.turns - this.incorrectGuesses.length) / (this.deck.length) * 100;
    return Math.round(percentage);
  }

  endRound() {
    const percentCorrect = this.calculatePercentCorrect();
    const message = `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`
    console.log(message);
    //const game = new Game();
    //game.start();
    return message;
  }
}

module.exports = Round;
