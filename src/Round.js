const Turn = require("../src/Turns");
const Card = require("./Card");
const Card1 = require("../src/Card");
const Deck = require("../src/Deck.js");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    this.turns += 1;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }

    this.currentCard = this.deck.cards[this.turns];
    return;
  }
  returnCurrentCard() {
    return this.currentCard;
  }
}
module.exports = Round;
