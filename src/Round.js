const dataSet = require('../src/data');
const Turn = require('./Turn');


class Round {
  constructor() {
    // needs currentCard, guesses (id#), 
    this.currentCard = dataSet.prototypeData[0];
    this.turns = 0;
    this.correctGuesses = [];
    this.incorrectGuesses = [];
  };

  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess, card) {
    this.turns++;
    this.currentCard = dataSet.prototypeData[this.turns];
    let newTurn = (new Turn(guess, card));
    if (newTurn.evaluateGuess()) {
      this.correctGuesses.push(newTurn.card.id);
    } else {
      this.incorrectGuesses.push(newTurn.card.id);
    }
    return newTurn.giveFeedback();
  };
};

module.exports = Round;