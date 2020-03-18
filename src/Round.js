const Turn = require('../src/Turn')
const Game = require('../src/Game')

class Round {
  constructor(deck, round = 1) {
    this.turns = 0;
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.totalIncorrects = 0;
    this.totalCorrects = 0;
    this.incorrectGuesses = []
    this.correctGuesses = []
    this.round = round
  }

  takeTurn(guess) {
    this.turns++
    console.log(this.currentCard)
    var turn = new Turn(guess, this.currentCard)
    // console.log(turn.evaluateGuess())
    if (!turn.evaluateGuess()) {
      this.totalIncorrects++
      this.incorrectGuesses.push(this.currentCard.id)
      this.rotateCards()

    } else {
      this.totalCorrects++
      this.correctGuesses.push(this.currentCard.id)
      this.deck.shift()
      this.currentCard = this.deck[0]
    }
    // console.log(this.totalCorrects)
    // console.log(this.deck.length)
    // if (this.deck.length === this.totalCorrects) {
    //   // console.log('end round!!!')
    //   this.endRound()
    // }
    console.log(this.currentCard)
    return turn.giveFeedback()
    // return turn;
  }


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
    // console.log('end round function!')
    console.log(`**Round Over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    this.round++;
    let currentRound = this.round

    // var game = new Game()
    // game.start()
    // game.start()
    // newRound(currentRound)
  }

  // startNewRound() {
  //   console.log('round', this.round)
  //   let newRound = this.round
  //   var game = new Game(newRound)
  // }

}

module.exports = Round;
