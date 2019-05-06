const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const turn = require('./Turn');
const game = require('./Game');

class Round {
  constructor(game, deck) {
    this.game = game;
    this.deck = deck || [];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return deck.shift();
  }

  takeTurn(guess) {
    let turn = this.createTurn(guess);
    this.turns++
    turn.evaluateGuess(guess);
  }

  createTurn(guess) {
    let currentCard = this.returnCurrentCard();
    return new turn(currentCard);
  }

  addIncorrectGuess(turn) {
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.card.id);
    }
  }

  calculatePercentCorrect() {
    let percentIncorrect = this.incorrectGuesses.length / this.deck.length * 100;
    endRound(100 - percentIncorrect);
  }

  endRound(percentage) {
    return `** Round over! ** You answered ${percentage}% of the questions correctly!`;
  }


}

module.exports = Round;
