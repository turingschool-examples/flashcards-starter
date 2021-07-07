const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = this.deck.cards[0];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck.cards[this.turns].id)
    }
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return this.incorrectGuesses.length/this.turns * 100
  }
}

module.exports = Round;