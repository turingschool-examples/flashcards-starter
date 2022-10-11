class Round {
  constructor() {
    this.guess = guess
    this.correct = false
    this.turn = 0
  }

  returnCurrentCard() {

  }

  taketurn() {
    //invoke other methods: updateTurnCount, nextCard, evaluateGuess, giveFeedback
  }

  updateTurnCount() {
    this.turn ++
  }

  nextCard() {
    //iterate through deck array one at a time and set the next index as current card
  }

  calculatePercentCorrect() {
    //calculates and return percentage of correct guesses
  }

  endRound() {
    //console.log('** Round over! ** You answered' calculatePercentCorrect() '% of the questions correctly')
  }

  

}