const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = this.deck.cards[this.turns];
  }
  returnCurrentCard() {
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
    return `${Math.round((correctGuesses/this.turns) * 100)}`
  }
  endRound() {
    console.log("** Round over! ** You answered " + `${this.calculatePercentCorrect()}%` +
    " of the questions correctly!")
    return "** Round over! ** You answered " + `${this.calculatePercentCorrect()}%` +
    " of the questions correctly!"
  }
}


module.exports = Round;
