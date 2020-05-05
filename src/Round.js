const Turn = require('../src/Turn');
class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.turn = null;
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }
  takeTurn(guess) {
    this.turn = new Turn (guess, this.deck.cards[this.turns]);
    this.turns++;

    if(!this.turn.evaluateGuess()){
      console.log('yay')
      this.incorrectGuesses.push(guess)
      console.log(this.incorrectGuesses)
    };
    return this.turn.giveFeedback();
  }
}

module.exports = Round;
