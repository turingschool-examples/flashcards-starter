const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound;
    this.timer = [];
  }

  start(data){
    const cards = data.map((card) => {
      return new Card(card.id, card.question, card.answers, card.correctAnswer)
    })

    const deck = new Deck(cards);

    this.currentRound = new Round(deck);
    this.printMessage(deck, this.currentRound);
    this.printQuestion(this.currentRound);
    console.time('timer-1');

    
    for(let i = 0; i < 1_000_000; i++) {
      this.timer.push( { i } );
    }
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