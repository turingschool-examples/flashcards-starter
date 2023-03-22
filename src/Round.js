let Turn = require('../src/Turn');

class Round {
  constructor(deck){
    this.deck = deck;
    this.deckSize = deck.cards.length;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.turn;
    this.percentCorrect = 0
    // console.log(this.deck)
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  takeTurn(guess) {
    this.turns += 1;
    this.turn = new Turn(guess, this.deck.cards[0])
    if (this.turn.evaluateGuess()) {
      this.deck.cards.shift();
    } else {
      this.incorrectGuesses.push(this.deck.cards[0].id);
      this.deck.cards.shift();
    }
    
    return this.turn.giveFeedback();
  }

  calculatePercentCorrect() {
    this.percentCorrect = 100 - ((this.incorrectGuesses.length / this.deckSize) * 100);
  }

  endRound() {
    return `Round Over! You answered ${this.percentCorrect}% of the questions correctly!`
  }
}

module.exports = Round;