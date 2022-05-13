const Turn = require('../src/Turn')
const Card = require('../src/Card')

class Round {
    constructor(deck) {
      this.deck = deck;
      this.turns = 0;
      this.incorrectGuesses = [];
    }
    returnCurrentCard() {
        return this.deck.cards[this.turns]
    }
    takeTurn(guess) {
      const newTurn = new Turn(guess, this.returnCurrentCard())
      if(!newTurn.evaluateGuess()){
        this.incorrectGuesses.push(this.returnCurrentCard().id)
      }
      this.turns += 1;
       return newTurn.giveFeedback()
    }
    calculateCorrectPercent() {

    }
    endTheRound() {
      console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    }
}

module.exports = Round;