// this object will take in responses and record guesses.
// methods = returnCurrentCard, takeTurn, calculatePercentCorrect, endRound
const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];


  }
  returnCurrentCard() {
    return this.currentCard;
  };
  takeTurn(guess) {
    var turn = new Turn(guess, this.currentCard);
    this.turns++;
    // if (turn.evaluateGuess() === false) {
    //   this.incorrectGuesses.push(this.currentCard.id);
    // }

    // this is hella janky but it works
    var cardIndex = (this.deck.cards.indexOf(this.currentCard) + 1);
    this.currentCard = this.deck.cards[cardIndex];

  }
}

module.exports = Round;
