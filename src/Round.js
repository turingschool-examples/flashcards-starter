const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = this.deck[this.turns];
  }

  returnCurrentCard() {
    if (this.turns >= this.deck.length) {
      return false;
    } else {
      return this.currentCard;
    }
  }

  takeTurn(guess) {
    var turn = new Turn(guess, this.currentCard);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns++;
    this.currentCard = this.deck[this.turns];
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return (100 - Math.round((this.incorrectGuesses.length / this.deck.length) * 100));
  }

  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
