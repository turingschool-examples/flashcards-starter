const Turn = require('../src/Turn');

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
    const card = this.returnCurrentCard();
    const turn = new Turn(guess, card);
    const feedback = turn.giveFeedback();
    if (turn.evaluateGuess() === false) {
    this.incorrectGuesses.push(card.id);
    }
    this.turns++;
    // let percentage = this.calculatePercentCorrect();
    return feedback;
  }

  calculatePercentCorrect() {
    return Math.floor((this.turns - this.incorrectGuesses.length)/this.turns * 100);
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;


        