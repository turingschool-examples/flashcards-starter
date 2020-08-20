const Turn = require('../src/Turn');

class Rounds{
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrect = [];
    this.startTime = Date.now();
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard());
    if(!turn.evaluateGuess()) {
      this.incorrect.push(turn.card.id);
    }
    this.turns++;
    return turn.giveFeedBack();
  }

  calculatePercentCorrect() {
    let ratioWins = (this.turns - this.incorrect.length) / this.turns;
    return (this.turns) ? Math.floor(10000 * ratioWins) / 100 : 0;
  }

  endRound() {
    const durationMessage = this.getDurationMSG();
    const message = `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!\nIt took you ${durationMessage} to complete.`
    return message;
  }

  getDurationMSG() {
    let durationSec = Math.floor( (Date.now() - this.startTime) / 1000);
    const durationMin = Math.floor(durationSec / 60);
    durationSec = (durationMin) ? durationSec % 60 : durationSec;
    let durationMessage = `${durationSec} second(s)`;
    if (durationMin) {
      durationMessage = `${durationMin} min. and ${durationMessage}`;
    }
    return durationMessage;
  }
}

module.exports = Rounds;
