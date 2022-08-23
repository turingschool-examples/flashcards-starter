const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    this.turns += 1;
    let turn = new Turn(guess, this.currentCard);
    this.currentCard = this.deck[this.turns];
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.currentCard.id);
    }
    return turn.giveFeedback();
  }
}

module.exports = Round;
