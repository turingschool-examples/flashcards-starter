const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.deck.deckOfCards[this.turns];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard())
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.card.id)
    }
    this.turns++
    return turn.giveFeedback()
  }

   calculatePercentCorrect() {
    let num = (this.incorrectGuesses.length * 10) / (this.turns * 10);
    let roundedNum = 1 - num 
    return `${roundedNum.toFixed(2)}%`
  }

  endRound(final) {
    return `**Round over!** You answered ${final} of the questions correctly!`
  }
}
module.exports = Round