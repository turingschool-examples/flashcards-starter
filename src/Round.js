const Turn = require('./Turn');

class Round {
  constructor (deck) {
    this.turns = 0;
    this.incorrectGuesses = [];
    this.deck = deck.cards;
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    const newTurn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    if (!newTurn.evaluateGuess(guess)){
      this.incorrectGuesses.push(newTurn.card.id);
    };
    console.log(newTurn.giveFeedback());
  }

  calculatePercentCorrect() {
    return Math.round(((this.turns - this.incorrectGuesses.length)/this.turns) * 100);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;