const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
// const Timer = require('../src/Round')

class Game {
  constructor(currentRound = 1) {
    this.currentRound = currentRound
  }

  start() {
    let cards = []
    prototypeQuestions.forEach(el => {
      const indexPos = prototypeQuestions.indexOf(el)
      var newCard =
         new Card(prototypeQuestions[indexPos].id, prototypeQuestions[indexPos].question,
           prototypeQuestions[indexPos].answers, prototypeQuestions[indexPos].correctAnswer)
       cards.push(newCard)
    })
    var deck = new Deck(cards)
    var round = new Round(deck)
    // var timer = new Timer()
    round.startTimer()
    this.printMessage(deck, round)
    this.printQuestion(round)
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with
      ${deck.countCards()} cards.----------------------------
      -------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

}

module.exports = Game;
