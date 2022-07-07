// const Card = require('../src/Card');
const Turn = require('../src/Turn');
// const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck
    // this.currentCard = deck.cards[0];
    this.turnCount = 0;
    this.incorrectGuessIds = [];
  }

  returnCurrentCard() {
    let currentCard = this.deck.cards[this.turnCount];
    return currentCard
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.deck.cards[this.turnCount]);
    turn.evaluateGuess();
    if (!turn.isCorrect) {
      this.incorrectGuessIds.push(this.deck.cards[this.turnCount].id);
    }
    this.turnCount ++
    this.returnCurrentCard()
    return turn.giveFeedback()
  }

  calculatePercentCorrect() {
    return parseInt(((this.turnCount - this.incorrectGuessIds.length) / this.turnCount) * 100)
  }

}


module.exports = Round;


