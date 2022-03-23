const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  };
  determineCurrentCard(constructorDeck) {
    return constructorDeck.cards
  }
  returnCurrentCard() {
    return this.currentCard = this.deck.cards[this.turns];
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard());
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns += 1;
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    return Math.ceil((this.turns - this.incorrectGuesses.length)/this.turns * 100)
  }
  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
};

module.exports = Round;
