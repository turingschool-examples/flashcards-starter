const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[0];
  }

  checkGuess(turn) {
    if (!turn.evaluateGuess(turn.card)) {
      this.incorrectGuesses.push(turn.card.id)
      return 'incorrect!';
    } else {
      return 'correct!';
    }
  }

  takeTurn(guess) {
    this.turns++;

    const turn = new Turn(guess, this.returnCurrentCard());
    this.checkGuess(turn);
    this.deck.cards.shift();
  }

  calculatePercentCorrect() {
    let result = this.turns - this.incorrectGuesses.length; 
    let percentCorrect = result / this.turns * 100;
    return percentCorrect;
    this.endRound(percentCorrect)
  }

  endRound(percentCorrect) {
    return `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`
  }
}

module.exports = Round;