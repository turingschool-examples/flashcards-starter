const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {}

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  //start() {
  //let newCards = prototypeQuestions.map(card => new Card(card["id"], card["question"]))
  //let newDeck = new Deck(newCards);
  //let newRound = new Round(newDeck)
  //this.pringMessage(newDeck, newRound)
  //this.printQuestion(newRound)
}
}

module.exports = Game;
