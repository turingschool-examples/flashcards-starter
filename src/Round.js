const Turn = require("./Turn");


class Round {
  constructor(deck) {
    this.deck = deck.cardsInDeck;
    this.turn = 0
    this.percentCorrect = 0
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.deck[this.turn];
  }
  
  takeTurn(userGuess, currentCard) {
    const currentTurn = new Turn(userGuess, currentCard)
    this.turn ++
    if (!currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(currentTurn.card.id)
    }
    currentTurn.giveFeedback()
  }

  calculatePercentCorrect(totalCards) {
    this.percentCorrect = 100 - (100 * this.incorrectGuesses.length) / totalCards
    return this.percentCorrect
  }

  endRound() {
    return `**Round Over!** You answered ${this.percentCorrect}% of the questions correctly!`
  }
}

module.exports = Round;