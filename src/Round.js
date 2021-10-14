const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck.cards[0];
    this.correct = 0;
    this.incorrect = []
    this.startTime = 0;
    this.endTime = 0;
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard)
    if (turn.evaluateGuess()) {
      this.correct++
    } else {
      this.incorrect.push(this.currentCard.id)
    }
    let feedback = turn.giveFeedback()
    this.turns++
    this.currentCard = this.deck.cards[this.turns]
    return feedback;
  }

  calculatePercentCorrect() {
    return Math.floor((this.correct / this.turns) * 100)
  }

  endRound() {
    console.log(`** Round Over! **  You answered ${this.calculatePercentCorrect()}% correctly!`)
    this.endTime = Date.now()
    let totalTime = this.endTime - this.startTime
    this.convertTime(totalTime)
  }

  convertTime(time) {
    console.log(time)
    let minutes = Math.floor(time / 60000);
    let seconds = ((time % 60000) / 1000).toFixed(0)
    console.log(`Your total time was ${minutes} minutes and ${seconds} seconds`)

  }
}

module.exports = Round