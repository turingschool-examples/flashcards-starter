const Turn = require('../src/Turn')
class Round {
  constructor(deck) {
    this.turns = 0;
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.totalIncorrects = 0;
    this.totalCorrects = 0;
    this.incorrectGuesses = []
    this.correctGuesses = []
  }

  takeTurn(guess) {
    this.turns++
    var turn = new Turn(guess, this.currentCard)
    // console.log(turn.evaluateGuess())
    if (turn.evaluateGuess() === false) {
      this.totalIncorrects++
      this.incorrectGuesses.push(this.currentCard.id)
    } else {
      this.totalCorrects++
      this.correctGuesses.push(this.currentCard.id)
    }
    this.rotateCards()
    return turn.giveFeedback()
    // return turn;
  }
  // takeTurn(guess) {
  //   this.turns++
  //   var turn = new Turn(guess, this.currentCard)
  //   // console.log(turn.evaluateGuess())
  //   if (turn.evaluateGuess() === false) {
  //     this.totalIncorrects++
  //     this.incorrectGuesses.push(this.currentCard.id)
  //     this.rotateCards()
  //   } else {
  //     this.totalCorrects++
  //     this.correctGuesses.push(this.currentCard.id)
  //     this.deck.shift()
  //   }
  //   return turn.giveFeedback()
  //   // return turn;
  // }
  rotateCards() {
    this.deck.shift(this.currentCard)
    this.deck.push(this.currentCard)
    this.currentCard = this.deck[0]
  }

  returnCurrentCard() {
    return this.currentCard
  }

  calculatePercentCorrect() {
    return (this.totalCorrects / (this.totalIncorrects + this.totalCorrects)) * 100;
  }

  endRound() {
    return `**Round Over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }

}

module.exports = Round;
