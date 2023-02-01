const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    let correct = turn.evaluateGuess();
    let feedback = turn.giveFeedback();
    this.turns++;
    correct ? correct : this.incorrectGuesses.push(this.currentCard.id);
    this.currentCard = this.deck.cards[this.turns];
    return feedback;
  }

  calculatePercentCorrect() {
    return Math.round(100 * (1 - (this.incorrectGuesses.length / this.turns)));
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;