const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor() {}
  currentRound;
  start = () => {
    let deck = this.generateDeck()
    let round = this.createRound(deck);
    this.displayGame(deck, round)
  }
  displayGame = (deck, round) => {
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
  createRound = (deck) => {
    let newRound = new Round(deck);
    this.currentRound = newRound;  
    return newRound
  }
  generateDeck = () => {
    let cards = [];
    prototypeQuestions.forEach((x => {
      cards.push(new Card(x));
    }))
    return new Deck(cards);
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