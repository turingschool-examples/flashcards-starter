const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.startTime = 0;
    this.endTime = 0;

  }

  returnCurrentCard() {
    console.log(this.deck.cards[this.turns])
    return this.deck.cards[this.turns];
  }

  takeTurn(answer) {
    const turn = new Turn(answer, this.returnCurrentCard())
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card);
    }
    this.turns++;
    return `${turn.guess} is ${turn.giveFeedback()}`
  }

  calculatePercentCorrect() {
    let correct = this.turns - this.incorrectGuesses.length;
    let percentage = (correct/this.turns) * 100;

    console.log(`You got ${Math.round(percentage)}% correct!`);
  }

  endRound() {
    this.calculatePercentCorrect();
    this.endTime = Date.now()
    let roundTime = this.endTime - this.startTime;
    let minutes = Math.floor(roundTime / 60000);
    let seconds = ((roundTime % 60000) / 1000).toFixed(0);
    console.log(`This round took ${minutes} minutes and ${(seconds < 10 ? '0' : '')} ${seconds} seconds!`)
}
}

module.exports = Round;
