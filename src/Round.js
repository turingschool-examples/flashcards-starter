const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++;
    let turn = new Turn(guess, this.currentCard);
    return turn.giveFeedback();
  }
}

module.exports = Round;