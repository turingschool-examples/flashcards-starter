const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.incorrectGuesses = [];
    this.turns = 0;
  }
  returnCurrentCard() {
    // console.log(this.deck);
    return this.deck.cardSet[this.turns];
  }

  takeTurn(guess) {
    console.log(this);
    const currentCard = this.returnCurrentCard();
    let turn = new Turn(guess, currentCard)
    console.log(turn.evaluateGuess())
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id)
    }

    this.turns++;
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {

  }
  endRound() {

  }
}


module.exports = Round;
