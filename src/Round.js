const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnCount = 0;
    this.incorrectAnswers = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turnCount];
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.turnCount);
    !turn.evaluateGuess() && this.incorrectAnswers.push(this.returnCurrentCard().id);
    turn.evaluateGuess();
    this.turnCount++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {

  }

  endRound() {

  }
}


module.exports = Round;