const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = this.deck.cards[0];
    this.correct = 0;
    this.incorrect = []
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
    return (`** Round Over! **  You answered ${this.calculatePercentCorrect()}% correctly!`)
  }
}

module.exports = Round