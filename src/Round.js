const Turn = require("../src/Turn");

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = 0;
    this.percentCorrect;
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(userGuess) {
    let newTurn = new Turn(userGuess, this.currentCard);
    this.turns++
    this.currentCard = this.deck[this.turns];
    if (!newTurn.evaluateGuess()) {
      this.incorrectGuesses.unshift(newTurn.card.id);
    } else {
      this.correctGuesses += 1
    }
    return newTurn.giveFeedback();
  }

// total turn is 3
// 2 correct guesses
//1 total incorrect guesses
// should be 1 divided by 3 which equals 33.3333 etc. We're on the right track

  calculatePercentCorrect() {
    let guessSum = this.correctGuesses - this.incorrectGuesses.length;
    this.percentCorrect = (Math.floor(guessSum/this.turns * 100));
    return this.percentCorrect;
  }

  endRound(){
    if (this.turns === this.deck.length);
    console.log(`**Round Over!** You answered ${this.percentCorrect} percent of the questions correctly!`)
  }
}



module.exports = Round;