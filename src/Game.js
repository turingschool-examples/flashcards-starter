const data = require('./data')
const prototypeQuestions = data.prototypeData
const util = require('./util')
const Deck = require('./Deck')
const Card = require('./Card')
const Turn = require('./Turn')
const Round = require('./Turn')

class Game {
  constructor(currentRound) {
    this.currentRound = currentRound;
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  startGame() {
    const card = new Card(1, "A good question", ["ans1", "ans2"], "ans2")
    const deck = new Deck()
    // const turn = new Turn("ans2", card)
    const round = new Round(card, turn, turn.guess)
    // this.printMessage(deck, round)
    // this.printQuestion(round)
  }

}

module.exports = Game;