const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.currentRound;
  }
  start() {
    const gameCards = prototypeQuestions.map(gameCard => {
      return new Card(gameCard.id, gameCard.question, gameCard.answers, gameCard.correctAnswer);
    })
    const gameDeck = new Deck(gameCards);
    let gameRound = new Round(gameDeck);
    this.currentRound = gameRound;
    this.printMessage(gameDeck, gameRound);
    this.printQuestion(gameRound);
  }
  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
