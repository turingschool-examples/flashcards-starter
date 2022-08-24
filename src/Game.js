const Card = require('./Card');
const data = require('./data');
const Deck = require('./Deck');
const Round = require('./Round');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  printMessage(deck, round) {
    //console.log(deck)
    let countedCards = deck.countCards()
    //console.log(countedCards)
    this.currentRound = round;
    console.log(`Welcome to FlashCards! You are playing with ${countedCards} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start(){
    const cards = prototypeQuestions.map(card => new Card(card.id,card.question,card.answers,card.correctAnswer))
    const deck = new Deck(cards)
    const round = new Round(deck)
   // console.log(deck)
    this.printMessage(deck,round)
    this.printQuestion(round) 
  }
}

module.exports = Game;