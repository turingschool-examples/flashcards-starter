const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turn = null;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turn = new Turn(guess, this.currentCard);
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];

    if (!this.turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.turn.card.id);
    }

    return this.turn.giveFeedBack();
  }
}

module.exports = Round;