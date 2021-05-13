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
    this.cards = prototypeQuestions.map(this.createCard)
    this.deck = new Deck(this.cards)  
    this.round = new Round(this.deck)
  }

  createCard(card) {
    const currentCard = Object.values(card)
    return new Card(currentCard[0], currentCard[1], currentCard[2], currentCard[3])
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