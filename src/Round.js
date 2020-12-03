const Turn = require('./Turn')

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    const feedback = turn.giveFeedback();
    if (turn.userGuess !== this.currentCard.correctAnswer) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
    return feedback;
  }

  calculatePercentCorrect() {
    return Math.ceil((this.turns - this.incorrectGuesses.length) / this.turns * 100);
  }
  
  endRound() {
    return `**Round Over!**You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
