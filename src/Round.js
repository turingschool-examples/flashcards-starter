const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

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
    if (guess === this.currentCard.correctAnswer) {
      return `correct!`
    } else {
      this.incorrectGuesses.push(this.currentCard)
      return `incorrect!`
    }
  }
}

module.exports = Round;