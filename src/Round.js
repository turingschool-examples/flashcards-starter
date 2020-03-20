const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = this.deck.cards[this.turns];
    this.startTime = 0;
    this.endTime = 0;
  }

  returnCurrentCard() {
    if (this.currentCard === this.deck.cards[0]) {
      this.startTime = Date.now();
    }
    return this.currentCard;
  }

  takeTurn(guess) {
    var turn = new Turn(guess, this.currentCard);
    this.turns++
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id)
      this.currentCard = this.deck.cards[this.turns];
      return 'incorrect!'
    } else {
      this.currentCard = this.deck.cards[this.turns];
      return 'correct!'
    }
  }

  calculatePercentCorrect() {
    let correctGuesses = this.turns - this.incorrectGuesses.length
    return `${Math.round((correctGuesses / this.turns) * 100)}`
  }

  endRound() {
    console.log("** Round over! ** You answered " +
      `${this.calculatePercentCorrect()}%` + " of the questions correctly!")
    this.calculateTotalTime();
    return "** Round over! ** You answered " +
      `${this.calculatePercentCorrect()}%` + " of the questions correctly!"
  }

  calculateTotalTime() {
    this.endTime = Date.now();
    let totalTime = Math.floor((this.endTime - this.startTime) / 1000);
    let minutes = Math.floor( (totalTime / 60) % 60 );
    let seconds = Math.floor( (totalTime) % 60 );
    if (totalTime < 60) {
      console.log(`>>>>>You finished in ${seconds} seconds`);
    } else {
      console.log(`>>>>>You finished in ${minutes} minutes and ${seconds} seconds`);
    }
  }
}



module.exports = Round;
