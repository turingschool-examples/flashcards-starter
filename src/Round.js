const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.incorrectGuesses = [];
    this.turns = 0;
  }
  returnCurrentCard() {
    return this.deck.cardSet[this.turns];
  }

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard)
    // console.log(turn)

    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id)
      // console.log(turn.evaluateGuess())
    }
    // console.log(turn.giveFeedback())
    this.turns++;
    return turn.giveFeedback(guess);
  }

  calculatePercentCorrect() {
    return Math.floor((this.turns - this.incorrectGuesses.length) / this.turns * 100)
  }

  endRound() {
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}


module.exports = Round;
