const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card')
const Deck = require('./deck')

class Game {
  constructor() {
    this.currentRound = 0;
    this.newCards;
  }

  start() {
    const newCards = prototypeQuestions.map((element) => {
      return new Card(element.id, element.question, element.possibleAnswers, element.correctAnswer)
    })
    this.newCards = newCards;
    const newDeck = new Deck(newCards);
    console.log(newDeck)
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