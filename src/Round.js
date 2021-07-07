const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = this.deck.cards[0];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    this.turns++;
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id)
    }
    this.currentCard = this.deck.cards[this.turns];
    return turn.giveFeedback();
  }

}

module.exports = Round;
