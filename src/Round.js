const Turn = require('../src/Turn');
class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard;
    
  }

  returnCurrentCard() {
    this.currentCard = this.deck[this.turns];
    return this.currentCard;
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard())
    this.turns++;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);
      return turn.giveFeedback();
    } else {
      return turn.giveFeedback();
    }
  }

  calculatePercentCorrect() {
    return +(((this.turns - this.incorrectGuesses.length) / this.turns * 100).toFixed(0))
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }

}

module.exports = Round;