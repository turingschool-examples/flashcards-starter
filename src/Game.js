const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Turn = require('../src/Turn')
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound = {}
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start(){
    const cards = prototypeQuestions.map(function(e) {
    const card = new Card(e.cardId, e.question, e.answers, e.correctAnswer);
    return card;
    });    
    console.log(cards[0].answers);
    //const turn = new Turn
    const deck = new Deck(cards);
    //console.log(deck);
    const round = new Round(deck);
   // console.log(round);
    this.printMessage(deck,round);
    this.printQuestion(round);
  }
}

module.exports = Game;