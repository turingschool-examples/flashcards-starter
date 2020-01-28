class Round {
  constructor(deck) {
    this.deck = deck;
    this.incorrectGuesses = [];
    this.turns = 0;
    this.currentCard = deck.cards[0];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn() {

  }
  calculatePercentCorrect() {

  }
  endRound() {

  }
}

module.exports = Round;
