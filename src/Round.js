class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(turn) {
    this.turns++;
    this.deck.cards.shift();
    return turn.giveFeedback();
  }
}

module.exports = Round;
