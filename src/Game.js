const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor(currentRound = 1) {
    this.currentRound = currentRound
  }

  start() {
    let cards = []
    // for (let i = 0; i < prototypeQuestions.length; i++) {
    //   var newCard =
    //     new Card(prototypeQuestions[i].id, prototypeQuestions[i].question,
    //       prototypeQuestions[i].answers, prototypeQuestions[i].correctAnswer)
    //   cards.push(newCard)
    // }

    prototypeQuestions.forEach(el => {
      const indexPos = prototypeQuestions.indexOf(el)
      var newCard =
         new Card(prototypeQuestions[indexPos].id, prototypeQuestions[indexPos].question,
           prototypeQuestions[indexPos].answers, prototypeQuestions[indexPos].correctAnswer)
       cards.push(newCard)
    })
    var deck = new Deck(cards)
    var round = new Round(deck)
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
