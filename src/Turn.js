class Turn {
  constructor(userGuess, currentCard){
    this.guess = userGuess,
    this.chosenCard = currentCard
    this.match = null
  }
  returnGuess(){
    return this.guess
  }
  returnCard(){
    return this.chosenCard
  }
  evaluateGuess(){
    if(this.chosenCard.correctAnswer === this.guess){
      this.match = true
      return true
    } else {
      this.match = false
      return false
    }
  }
  giveFeedback(){
    if(this.match){
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}

module.exports = Turn;