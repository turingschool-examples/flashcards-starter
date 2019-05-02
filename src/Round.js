const Turn = require('../src/Turn');
const data = require('./data');
const prototypeQuestions = data.prototypeData;

class Round {
  constructor(deck, game) {
    this.deck = deck;
    this.game = game;
    this.turn = 0;
    this.incorrectGuesses = [];
    this.incorrectCards = []
  }

  returnCurrentCard() {
    return this.deck.cards[0]
  }

  takeTurn(currentGuess) {
    const turn = new Turn(currentGuess, this.deck.cards[0]);
    this.turn++
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck.cards[0].id)
      this.incorrectCards.push(this.deck.cards[0])
    }
    this.deck.cards.shift()
    return turn.giveFeedback()

  }

  calculatePercentCorrect() {
    return Math.floor(100 - ((this.incorrectGuesses.length / this.turn) * 100))
  }

  endRound() {
    console.log(`**Round Over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    if (this.game.roundNumber < prototypeQuestions.length && this.calculatePercentCorrect() === 100) {
      this.game.addRound()
      this.game.start()
    } else if (this.calculatePercentCorrect() >= 90) {
      prototypeQuestions[this.game.roundNumber] = this.incorrectCards
      this.game.start(this['incorrectCards'])
    } else if (this.calculatePercentCorrect() < 90) {
      this.game.start()
    } else {
      console.log("Game Over!")
    }
  }
}

module.exports = Round;