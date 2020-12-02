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

  takeTurn(currentGuess, currentCard) {
    const thisTurn = new Turn(currentGuess, currentCard)
    this.turnCount++
    currentCard.cardId++
    thisTurn.evaluateGuess(currentGuess)
    thisTurn.giveFeedback()
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