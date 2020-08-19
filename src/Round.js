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
      let newTurn = new Turn();
      let currentCard = this.returnCurrentCard();
      return this.getResult(guess, newTurn, currentCard);
    }
    getResult = (guess, newTurn, currentCard) =>{
      return this.evaluateGuess(guess, newTurn, currentCard)
    }
    evaluateGuess = (guess, newTurn, currentCard) =>{
      let result = newTurn.evaluateGuess(guess, currentCard);
      this.handleResult(result, currentCard)
      return newTurn.giveFeedback(result);
    }
    handleResult = (result, currentCard) =>{
      !result ? this.incorrectGuesses.unshift(currentCard.id) : null;
      this.deck.shift();
      this.turns++;
    }
    calculatePercentCorrect = () => {
      return  Math.round((this.incorrectGuesses.length / this.turns) * 100) ;
    }
    endRound = () => {
      console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    }
  }
module.exports = Round;