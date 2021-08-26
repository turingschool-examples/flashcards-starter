const Turn = require('../src/Turn.js');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.startTime = Date.now();
    this.endTime;
    this.roundTime;
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    switch(turn.evaluateGuess()) {
      case true:
        break;
      case false:
        this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns ++;
    this.currentCard = this.deck.cards[this.turns];
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    return Math.floor((1 - (this.incorrectGuesses.length/this.turns)) * 100);
  }
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    this.endTime = Date.now();
    this.roundTime = (this.endTime - this.startTime) / 1000;
    console.log(`You completed this round in ${Math.floor(this.roundTime / 60)} minutes ${Math.floor(this.roundTime % 60)} seconds.`)
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
