const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor(currentRound, currentCard, currentTurn, currentGuess) {
    this.currentRound = currentRound
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
    util.main(round);
  }

  startGame(cardID, question, answers, correctAnswer) {
    deck.createCard(cardID, question, answers, correctAnswer)
  }

  createRound(currentCard, currentTurn, currentGuess) {
    const round = new Round(currentCard, currentTurn, currentGuess)
  }


  // game start method:
  // create cards
  // create deck
  // create round
  // invoke this.printMessage
  // invoke this.printQuestion
}

module.exports = Game;