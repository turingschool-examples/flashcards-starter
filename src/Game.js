const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const turn = require('./Turn');

class Game {
  constructor() {
    
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  start(currentDeck = prototypeQuestions[this.roundNumber]) {
    let deck = new Deck(currentDeck.map(card => 
      card = new Card(card.id, card.question, card.answers, card.correctAnswer)));
    let round = new Round(deck, this);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;