const Turn = require('../src/turn');
const Deck = require('../src/deck');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    var turn = new Turn(guess, this.currentCard)
    this.turns += 1;
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
      this.currentCard = this.deck[this.turns];
      return `Your answer of ${guess} is incorrect!`
    } else {
      this.currentCard = this.deck[this.turns];
      return `Your answer of ${guess} is correct!`
    }
  }



}


module.exports = Round;
