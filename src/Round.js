var Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = this.returnCurrentCard();
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns];
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    let newTurn = new Turn(guess, this.currentCard);
    this.turns++;
    this.returnCurrentCard();
    // return newTurn;
  }

}

module.exports = Round;
