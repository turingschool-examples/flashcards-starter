const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  
  returnCurrentCard() {
  	return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
  	const turn = new Turn(guess, this.returnCurrentCard());
    !turn.evaluateGuess() ? this.incorrectGuesses.push(this.returnCurrentCard().id) : null;
    this.turns++;
    return turn.giveFeedback();
  }

  currentCard() {
  	let index = this.turns 
  	return this.deck.cards[index]
  }

  calculatePercentCorrect() {
  	return (this.turns - this.incorrectGuesses.length) / this.turns * 100;
  }

  endRound() {
    if (this.turns >= this.deck.cards.length) {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    }
  }

};

module.exports = Round;