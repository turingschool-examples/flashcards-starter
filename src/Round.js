class Round {
  constructor(deckObj){
    this.deck = deckObj
    this.turns = 0
    this.incorrectGuesses = []
  }
  returnCurrentCard(){
    return this.deck
  }
  takeTurn(){
    this.turns++ 
    turn.evaluateGuess()
    turn.giveFeedback()
  }
  calculatePercentCorrect(){
    return this.incorrectGuesses.length * 50
  }
  endRound(){
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;