const Turn = require('../src/Turn');
const Card = require('../src/Card');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[this.turns];
  }

  takeTurn(guess, currentCard) {
    this.turns++;
    const turn = new Turn(guess, currentCard);
    const isCorrect = turn.evaluateGuess();
    if (!isCorrect) {
      this.incorrectGuesses.push(currentCard.id);
      return turn.giveFeedback();
    } else {
      return turn.giveFeedback();
    }
  }

  calculatePercentCorrect() {
    return (this.incorrectGuesses.length / this.turns) * 100;
  }

  endRound() {
    //prints "** Round over! ** You answered <>% of the questions correctly!"
  }
}

module.exports = Round;
