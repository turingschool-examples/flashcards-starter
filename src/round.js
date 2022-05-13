const Deck = require("../src/Deck");
const Turns = require("../src/Turns");

class Round {
  constructor(decks) {
    this.deck = decks;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[0];
  }
  takeTurn(guess) {
    const turn = new Turns(guess, this.returnCurrentCard());
    this.turns++;
    if (!guess === turn.currentCard.correctAnswer) {
      this.incorrectGuesses.push(turn.currentCard.id);
    }
    return turn.giveFeedback();
  }
}

module.exports = Round;
