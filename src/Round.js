const Turn = require('../src/Turn');

class Round {
  constructor(cards) {
    this.cards = cards;
    this.turns = 0;
    this.currentCard = this.cards[this.turns];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.currentCard);
    const feedback = this.currentTurn.giveFeedback();

    if (feedback === 'incorrect!') {
      this.incorrectGuesses.push(this.currentCard.id);
    }

    this.turns += 1;
    this.currentCard = this.cards[this.turns];
    return feedback;
  }

  calculatePercentCorrect() {
    const percentage = Math.floor(
      ((this.turns - this.incorrectGuesses.length) / this.turns) * 100
    );

    return percentage;
  }

  endRound() {
    console.log(
      `** Round over! ** You answered 
      ${this.calculatePercentCorrect()}% of the questions correctly!`
    );
  }

}

module.exports = Round;