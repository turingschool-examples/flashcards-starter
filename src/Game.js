const data = require('./data');
const prototypeQuestions = data.prototypeData;
const myNewData = data.myNewData;
const rawQuestions = [];
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
    let round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
  // getGameId(id){
  //   return this.currentDecks
  // }
  getIndex(name) {
    this.decks.forEach(function(element, index) {
      if (element.name === name) {
        return index;
      }
    })
  }
  newDeck(data) {
    let newDeck = [];
    data.forEach(function(element, index) {
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
