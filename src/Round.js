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
      let currentCard = this.returnCurrentCard();
      let newTurn = new Turn(guess, currentCard);
      !newTurn.evaluateGuess() ? this.incorrectGuesses.unshift(currentCard.id) : null;
      this.deck.shift();
      this.turns++;
      return newTurn.giveFeedback();
    }
    calculatePercentCorrect = () => {
      return  Math.round((this.turns - this.incorrectGuesses.length) / this.turns* 100 ) ;
    }
    endRound = () => {
      console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    }
  }
module.exports = Round;