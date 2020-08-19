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
      return this.getResult(guess, currentCard);
    }
    getResult = (guess, currentCard) =>{
      let newTurn = new Turn();
      return this.evaluateGuess(guess, newTurn, currentCard);
    }
    evaluateGuess = (guess, newTurn, currentCard) =>{
      let result = newTurn.evaluateGuess(guess, currentCard);
      return this.handleResult(result, newTurn, currentCard);
    }
    handleResult = (result, newTurn, currentCard) =>{
      this.adjustGameSettings(result, currentCard);
      return newTurn.giveFeedback(result);
    }
    adjustGameSettings = (result, currentCard) =>{
      !result ? this.incorrectGuesses.unshift(currentCard.id) : null;
      this.deck.shift();
      this.turns++;
    }
    calculatePercentCorrect = () => {
      return  Math.round((this.turns - this.incorrectGuesses.length) / this.turns* 100 ) ;
    }
    endRound = () => {
      console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    }
  }
module.exports = Round;