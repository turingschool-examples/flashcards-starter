class Turn {
  constructor(userGuess, currentCard){
    this.guess = userGuess,
    this.chosenCard = currentCard
  }
  returnGuess(){
    return this.guess
  }
  returnCard(){
    return this.chosenCard
  }
  evaluateGuess(){
    if(this.chosenCard.correctAnswer === this.guess){
      return true
    } else {
      return false
    }
  }
  giveFeedback(){
    if(this.evaluateGuess() === true){
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }
}