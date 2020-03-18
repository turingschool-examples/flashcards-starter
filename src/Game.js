const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn')

class Game {
  constructor() {
    // this.currentRound = currentRound
    // this.currentRound = undefined
  }
  // constructor(currentRound = 1) {
  //   this.currentRound = currentRound
  //   // this.currentRound = undefined
  // }

  start() {
    let cards = []
    for (let i = 0; i < prototypeQuestions.length; i++) {
      var newCard = new Card(prototypeQuestions[i].id, prototypeQuestions[i].question, prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer)
      cards.push(newCard)
    }
    var deck = new Deck(cards)
    // console.log(deck)
    var round = new Round(deck)
    // this.currentRound = round
    // console.log(this.currentRound)
    this.printMessage(deck, round)
    this.printQuestion(round)
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  // newRound() {
  //   console.log('new round!')
  //   this.currentRound++
  //   console.log(this.currentRound)
  //   let cards = []
  //   for (let i = 0; i < prototypeQuestions.length; i++) {
  //     var newCard = new Card(prototypeQuestions[i].id, prototypeQuestions[i].question, prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer)
  //     cards.push(newCard)
  //   }
  //   var deck = new Deck(cards)
  //   // console.log(deck)
  //   var round = new Round(deck)
  //   this.printQuestion(round)
  // }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
