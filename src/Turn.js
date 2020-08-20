class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.correct = true;
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
      this.correct = true
      return true
    } else {
      this.correct = false
      false
    }
  }
  giveFeedback() {
    if(this.correct) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
}

  // giveFeedback() {
  //   if (this.evaluateGuess() === true) {
  //     return 'correct!';
  //   } else {
  //     'incorrect!'
  //   }
  // }
}



//i want to compare the guess made to the card.correctAnswer key value pair
//it should return a true or false to be used for later functionality.

//



module.exports = Turn;
