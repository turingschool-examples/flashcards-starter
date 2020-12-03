const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess) {
    let currentCard = this.returnCurrentCard();
    let turn = new Turn(guess, currentCard);
    let feedback = turn.giveFeedback();
    this.turns++;
    if (feedback === 'incorrect!') {
      this.incorrectGuesses.push(currentCard.id);
    }
    return feedback;
  }

  calculatePercentageCorrect() {
    let numberOfCorrect = this.turns - this.incorrectGuesses.length;
    return Math.round(numberOfCorrect / this.turns * 100);
  }

  endRound() {
    if (this.turns === 30) {
      console.log(`** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`);
    }
  }
}

module.exports = Round;
