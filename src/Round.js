const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Turn = require('../src/Turn');

class Round {
  constructor(thisDeck) {
    this.deck = thisDeck.stack;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard
  }
  takeTurn(guess) {
    this.currentCard = this.deck[0];
    this.deck.shift()
    this.turns++
    const turn = new Turn(guess, this.currentCard);
    if (guess === this.currentCard.correctAnswer) {
      return `correct!`
    } else {
      this.incorrectGuesses.push(this.currentCard.id)
      return `incorrect!`
    }
  }
}

module.exports = Round;