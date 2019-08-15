const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard;
    this.turn = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turn]
    return this.currentCard;
  }

  takeTurn(userGuess) {
    let turn = new Turn(userGuess, this.returnCurrentCard());

    this.turn++;

    turn.evaluateGuess() ? null : this.incorrectGuesses.push(this.currentCard.id);

    return turn.giveFeedback();
  }

  calculatePercentage() {
    let num = Math.round(this.incorrectGuesses.length / this.deck.cards.length * 100)

    return 100 - num;
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentage()}% of the questions correctly!`)
  }
}

module.exports = Round;