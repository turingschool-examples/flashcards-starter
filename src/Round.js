class Rounds{
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrect = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    this.turns++;
  }
}

module.exports = Rounds;
