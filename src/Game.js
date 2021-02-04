const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = null;
  }

  start() {
    let newDeck = prototypeQuestions.map(card => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })
    
    newDeck = new Deck(newDeck)
    this.currentRound = new Round(newDeck)
    this.printMessage(newDeck);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;