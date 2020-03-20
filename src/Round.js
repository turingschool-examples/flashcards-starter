const Turn = require('./Turn');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.start = 0;
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.deck[0]);
    let checkAnswer = turn.evaluateGuess();
    if (!checkAnswer) {
      this.incorrectGuesses.push(this.deck[0].id);
    }
    this.deck.shift(this.deck[0]);
    this.turns++;
    return turn.giveFeedback();
  }

  displayTime() {
    let elapsedTime = Date.now() - this.start;
    let seconds = (elapsedTime / 1000) % 60;
    let minutes = Math.floor((elapsedTime / 1000) / 60);
    if (seconds < 10) {
      return `${minutes}:0${seconds.toFixed(2)}`;
    } else {
      return `${minutes}:${seconds.toFixed(2)}`;
    };
  }

  startTimer() {
    this.start = Date.now();
  }

  calculatePercentCorrect() {
    let correctGuesses = (this.turns - this.incorrectGuesses.length);
    let percentageCorrect = Math.round((correctGuesses / this.turns) * 100);
    return percentageCorrect;
  }

  endRound() {
    let percent = this.calculatePercentCorrect();
    let time = this.displayTime();
    console.log(`** Round over! ** You answered ${percent}% of the questions correctly in ${time} minutes!`);
  }
}

module.exports = Round;
