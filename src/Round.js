class Rounds{
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrect = [];
  }

  takeTurn(guess) {
    this.turns++;
  }
}

module.exports = Rounds;
