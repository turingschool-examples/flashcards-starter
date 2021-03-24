const Turn = require("../src/Turn");

class Round {
  constructor(deck, card) {
    this.deck = deck;
    this.currentCard = card;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(userGuess) {
    const currentTurn = new Turn(userGuess, this.currentCard);
    this.turns++;
    if (!currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.currentCard = this.deck.cards[this.turns];
    return `Your value of ${currentTurn.userGuess} is ${currentTurn.giveFeedback()}`
  }
  calculatePercentCorrect() {
    const score = Math.round((1-(this.incorrectGuesses.length/this.turns)) * 100);
    return score;
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;
