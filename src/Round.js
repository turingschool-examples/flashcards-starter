const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCardIndex = 0;
    this.currentCard = this.deck[this.currentCardIndex]
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const currentTurn = new Turn(guess, this.currentCard);
    if (!currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns++;
    this.currentCardIndex++
    this.currentCard = this.deck[this.currentCardIndex];
    return currentTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    return this.incorrectGuesses.length / this.turns * 100;
  }

  endRound() {
    const percentCorrect = this.calculatePercentCorrect();
    return `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`
  }
}

module.exports = Round;
