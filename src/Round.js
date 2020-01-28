const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  movefirstCardToLast() {
    const firstCard = this.deck.shift();
    this.deck.push(firstCard);
  }

  takeTurn(guess) {
    const card = this.returnCurrentCard();
    const turn = new Turn(guess, card);
    this.turns += 1;
    if (!turn.evaluateGuess()) this.incorrectGuesses.push(card.id);
    this.movefirstCardToLast();
    return turn.giveFeedback();
  }

  calculatePercentageCorrect() {
    const totalCorrect = this.turns - this.incorrectGuesses.length;
    return totalCorrect / this.turns * 100;
  }
}

module.exports = Round;
