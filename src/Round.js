const Turn = require('../src/Turn');

class Round {
  constructor(deck, turn) {
    this.deck = deck.deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    }
    returnCurrentCard = (card) => {
      return this.deck[0];
    }
    takeTurn = (guess) => {
      this.turns++;
      let newTurn = new Turn();
      let currentCard = this.returnCurrentCard();
      let result = newTurn.evaluateGuess(guess, currentCard);
      !result ? this.incorrectGuesses.unshift(currentCard.id) : null;
      this.deck.shift();
      return newTurn.giveFeedback(result);
    }
    calculatePercentCorrect = () => {
      return  Math.round((this.incorrectGuesses.length / this.turns) * 100) ;
    }
  }
module.exports = Round;