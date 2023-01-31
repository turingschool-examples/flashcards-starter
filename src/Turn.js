class Turn {
  constructor(userGuess, cardObject) {
    this.guess = userGuess
    this.card = cardObject
  }

  returnGuess() {
    return this.guess
  }
  
  returnCard() {
    return this.card
  }

  eveluateGuess() {
    if (this.guess === this.card.correctAnswer) {
      return true
    } else {
      return false
    }
  }

  giveFeedback() {
    if (Turn.eveluateGuess() === true) {
      return 'Correct!'
    } else {
      return 'Incorrect!'
    }
  }
}




module.exports = Turn