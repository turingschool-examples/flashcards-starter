const Turn = require('../src/Turn')

class Round {
  constructor(currentCard, currentTurn, currentGuess) {
    this.currentCard = currentCard;
    this.currentTurn = currentTurn;
    this.currentGuess = currentGuess;
    this.turnCount = 0;
  }

  returnCurrentCard() {
    return this.currentCard
  }

  // currentCard = currentCard[id++]
  // turn.giveFeedback
  takeTurn(currentGuess, currentCard) {
    const thisTurn = new Turn(currentGuess, currentCard)
    this.turnCount++
    thisTurn.evaluateGuess(currentGuess)
    return this.currentTurn
  }

  // calculate percent correct
  calculatePercentCorrect() {

  }

  // console.log round over, you answered % of questions correctly
  endRound() {

  }
}

module.exports = Round