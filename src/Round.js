const Turn = require('../src/Turn')

class Round {
  constructor(currentCard, currentTurn, currentGuess) {
    this.currentCard = currentCard;
    this.currentTurn = currentTurn;
    this.currentGuess = currentGuess;
    this.turnCount = 0;
    this.rightAnswers = 0;
  }

  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(currentGuess, currentCard) {
    const thisTurn = new Turn(currentGuess, currentCard)
    this.turnCount++
    currentCard.cardId++
    thisTurn.evaluateGuess(this.currentGuess)
    thisTurn.giveFeedback()
    if (thisTurn.giveFeedback() === 'correct!') {
      this.rightAnswers++
    }
    return this.currentTurn
  }

  calculatePercentCorrect() {
    return (this.rightAnswers / this.turnCount) * 100
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }

}

module.exports = Round