const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turns = 0;
    this.correct = 0;
    this.incorrect = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    turn.evaluateGuess() ? this.correct++ : this.incorrect.push(this.currentCard.id);
    this.turns++;
    this.currentCard = this.deck.cards[this.turns]
    return turn.giveFeedback(turn.evaluateGuess());
  }
  calculatePercentCorrect() {
    return Math.floor((this.correct/this.turns)*100);
  }
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
