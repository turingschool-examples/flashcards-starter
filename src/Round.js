const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turnNumber = 0;
    this.incorrectGuesses = [];
  }
  
  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const newTurn = new Turn (guess, this.currentCard);
    this.turnNumber++;
    this.currentCard = this.deck.cards[this.turnNumber];
    if (newTurn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);
      }
    return newTurn.giveFeedback();
    }  
  }   

  // calculatePercentCorrect() {}
    // method that calculates and returns the percentage of correct guesses

  //endRound() {}
    // method that prints the following to the console: ‘** Round over! ** You answered <>% of the questions correctly!’

module.exports = Round;