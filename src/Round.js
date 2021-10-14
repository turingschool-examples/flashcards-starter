const Turn = require("./Turn.js");
class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentTurn;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.returnCurrentCard());
    this.turns++;
    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentTurn.currentCard.id);
    }

    return this.currentTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    if (this.incorrectGuesses.length) {
      return Math.round(100 - 
      (this.incorrectGuesses.length / this.turns) * 100);
    } else {
      return (100);
    }
    
  }

  endRound() {
    console.log(`** Round over! ** You answered\
     ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
}

module.exports = Round;