class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }

  returnGuess() {
    return this.guess
  }
  returnCard(newCard) {
    return newCard
  }
  evaluateGuess(card) {
    if (this.guess === card.correctAnswer) {
      return true
    } else {
      false
    }
  }
  giveFeedback() {
    
  }
}



//i want to compare the guess made to the card.correctAnswer key value pair
//it should return a true or false to be used for later functionality.

//



module.exports = Turn;
