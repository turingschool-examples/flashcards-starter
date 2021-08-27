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
        this.deck.cards.push(this.currentCard);
    }
    this.turns ++;
    this.currentCard = this.deck.cards[this.turns];
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    return Math.floor((1 - (this.incorrectGuesses.length/this.turns)) * 100);
  }
  endRound() {
    this.endTime = Date.now();
    this.roundTime = (this.endTime - this.startTime) / 1000;

    let scoreMessage = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
    let timerMessage = `You completed this round in ${Math.floor(this.roundTime / 60)} minutes ${Math.floor(this.roundTime % 60)} seconds.`;


    console.log(scoreMessage);
    console.log(timerMessage);
    this.printAttempts();
    return scoreMessage;
  }
  printAttempts() {
    let wrongIds = this.incorrectGuesses.reduce((accumulator, current) => {
      {
        accumulator[current] = this.incorrectGuesses.filter(element => element === current).length + 1
      }
      return accumulator;
    }, {})

    let wrongKeys = Object.keys(wrongIds);

    wrongKeys.forEach(element => {
      console.log(`Question #${element} took you ${wrongIds[element]} attempts. Pitiful!`)
    })
  }
}

module.exports = Round;
