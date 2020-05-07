const Turn = require('../src/Turn');
class Round {
  constructor(deck) {
    this.deck = deck;
    this.incorrectGuesses = [];
    this.start = Date.now();
    this.timer = 0;
    this.turn = null;
    this.turns = 0;
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    this.turn = new Turn (guess, this.deck.cards[this.turns]);
    this.turns++;
    if (!this.turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.turn.card.id);
    }
    return this.turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.round( 100 * (this.turns - this.incorrectGuesses.length) / this.turns);
  }

  endRound() {
    let totalSeconds = Math.floor((Date.now() - this.start) / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds - (minutes * 60);
    console.log(minutes + ' minutes ' + seconds + ' seconds');
    console.log( `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    return process.exit();
  }
}

module.exports = Round;
