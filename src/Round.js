const data = require('../src/data');
// const util = require('../src/util');
// const Card = require('../src/Card');
// const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
// const Game = require('../src/Game');



class Round {
  constructor(deck, game) {
    this.turns = 0;
    this.deck =  deck || {}
    this.incorrectGuesses = [];
    this.game = game || {}
  }
  returnCurrentCard() {
    return this.deck.cards[this.turns]
  }
  takeTurn(guess) {
    let turn = new Turn (guess, this.deck.cards[this.turns])
    this.turns += 1
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.card.id)
    }
    return turn.giveFeedback()
  }
  calculatePercentCorrect() {
    return (Math.floor(100 - (this.incorrectGuesses.length / this.turns * 100)))
  }
  
  endRound() {
    console.log(`** Round over! ** You answered 
      ${this.calculatePercentCorrect()}% of the questions correctly!`)
    // var filteredQuestions = this.incorrectGuesses.filter(question => question.id.includes([2, 3, 4, 5, 6, 7 ]))
    // console.log(filteredQuestions)
    // // data.prototypeData.splice(this.game.currentRoundCounter, 0, this.incorrectGuesses)
    this.game.start()

  }
}

module.exports = Round;