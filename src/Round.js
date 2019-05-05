const data = require('./data');
const Turn = require('../src/Turn');
const prototypeQuestions = data.prototypeData;

class Round {
  constructor(deck, game) {
    this.game = game;
    this.turns = 0;
    this.deck = deck || [];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cardDeck[this.turns];
  }

  takeTurn(userGuess) {
    const turn = this.createNewTurn(userGuess);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck.cardDeck[this.turns].id);
    }
    this.turnCounter();
    return turn.giveFeedback();
  }

  createNewTurn(userGuess) {
    return new Turn(userGuess, this.returnCurrentCard());
  }

  turnCounter() {
    this.turns++;
  }

  calculatePercentCorrect() {
    return Math.round(100 - (this.incorrectGuesses.length * 100) / this.turns);
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    this.game.roundCounter++;
    if (this.calculatePercentCorrect() < 90) {
      this.game.roundCounter--;
      console.log(`Not bad, but until you answer 90% or better, you'll have to replay this round; you can do it!!!`)
    }
    if (this.game.roundCounter < prototypeQuestions.length) {
      this.game.start();
    } else {
      console.log(`You finished ${this.game.roundCounter} rounds, and that's all the questions I've prepped, now get off the computer!!!`);
    }
  }

}

module.exports = Round;