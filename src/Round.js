const Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard(){
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.deck.cards[this.turns]);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    }
    this.turns += 1;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.round(((this.turns - this.incorrectGuesses.length)/(this.turns))* 100);
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module .exports = Round;
