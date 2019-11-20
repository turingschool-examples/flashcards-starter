const Turn = require('../src/Turn');

class Round {
	constructor(deck) {
		this.deck = deck
		this.turns = 0;
		this.incorrectGuesses = [];
	}
  
  returnCurrentCard() {
  	return this.deck.cards[0];
  }

  takeTurn(guess) {
  	const turn = new Turn(guess, this.returnCurrentCard());
    !turn.evaluateGuess() ? this.incorrectGuesses.push(this.returnCurrentCard().id) : null;
    this.turns++;
    return turn.giveFeedback();
  }

};

module.exports = Round;