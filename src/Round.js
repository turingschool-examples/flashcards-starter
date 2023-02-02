const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentTurn = null;
    this.currentCard = null;
    this.correctGuesses = [];
    this.incorrectGuesses = [];
  }
  
  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns];
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
    if(this.turns >= 1) {
      const totalCorrect = this.correctGuesses.length/this.turns * 100;
      return `${totalCorrect.toFixed(0)}%`;
    } 
    return `no questions answered.`;
  }

  endRound() {
    const total = this.calculatePercentCorrect();
    const endMessage = `** Round over! ** You answered ${total} of the questions correctly!`;
    console.log(endMessage);
    return endMessage;
  }
}

module.exports = Round;