const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util')
const Round = require('./Round');
const Turn = require('./Turn');
const Deck = require('./Deck')
const Card = require('./Card')

class Game {
  constructor(round) {
    this.currentRound = round   
  }

  start() {
    this.cards = prototypeQuestions.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
    this.deck = new Deck(this.cards)  
    this.round = new Round(this.deck)
    this.printMessage(this.deck, this.round)
    console.log(this.cards[0].answers)
    this.printQuestion(this.round)
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;