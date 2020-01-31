const data = require('./data');
const prototypeQuestions = data.prototypeData;
const myNewData = data.myNewData;
const util = require('./util');
const Deck = require('./Deck');
const Round = require('./Round');
const Card = require('./Card');
// let decks =[];

class Game {
  constructor() {
    this.currentRound = 0;
    this.decks = [];
    this.currentDeck = this.decks[0];
  }
  start() {
    let deck = new Deck(this.newDeck(prototypeQuestions), 'prototype');
    let deck2 = new Deck(this.newDeck(myNewData), 'NewData');
    this.decks.push(deck, deck2);
    let round = this.newRound(deck)
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
  newRound(deck) {
    return new Round(deck);
  }
  getIndex(name) {
    var deckIndex = 0;
    this.decks.forEach(function(element, index) {
      if (element.name === name.decks) {
        deckIndex = index;
      }
    });
    this.currentRound = deckIndex;
    return deckIndex;
  }
  newDeck(data) {
    let newDeck = [];
    data.forEach(function(element) {
      newDeck.push(new Card(element.id, element.question, element.answers, element.correctAnswer))
    });
    return newDeck;
  }
  chooseRound() {

  }
  nextRound() {
    console.log(`
      -----------------------------------------------------------------------
                           Welcome to the Next Round!!
      -----------------------------------------------------------------------`)
    console.log(this.currentRound);
    let round = new Round(this.decks[this.currentRound]);
    this.printQuestion(round);
  }
  printMessage(deck) {
    console.log(`
        -----------------------------------------------------------------------
                             Welcome to FlashCards!
        -----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.asyncHelper(round, this.decks, this);
  }
}

module.exports = Game;
