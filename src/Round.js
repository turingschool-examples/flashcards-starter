const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentTurn = undefined;
    this.currentCard = undefined;
    this.correctGuesses = [];
    this.incorrectGuesses = [];
  }
  
  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns]
    return this.currentCard;
  }
 
  takeTurn(guess) {
    let card = this.returnCurrentCard();
    this.currentTurn = new Turn(guess, card);
    this.addTurn();
    this.checkGuess();
    return this.currentTurn.giveFeedback();
  }

  addTurn() {
    return this.turns += 1;
  }

  checkGuess() {
    if(this.currentTurn.evaluateGuess(this.currentTurn.currentCard)) {
      this.correctGuesses.push(this.currentCard.id);
      return this.correctGuesses;
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
      return this.incorrectGuesses;
    }
  }
  
  calculatePercentCorrect() {
    let totalCorrect = this.correctGuesses.length/this.turns * 100;
    return `${totalCorrect.toFixed(0)}%`;
  }

  endRound() {
    let total = this.calculatePercentCorrect();
    console.log(`** Round over! ** You answered ${total} of the questions correctly!`);
  }
}

module.exports = Round;