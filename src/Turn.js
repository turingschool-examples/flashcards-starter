class Turn {
  constructor(userGuess, selectedCard) {
    this.guess = userGuess;
    this.currentCard = selectedCard;
    this.isCorrect = undefined;
  }

  returnGuess() {
    return this.guess;
  } 
  
  returnCard() {
    return this.currentCard;
  }

  evaluateGuess(card) {
    if(this.guess === card.correctAnswer) {
      return this.isCorrect = true;
    } else {
      return this.isCorrect = false;
    }
  }

  giveFeedback() {
    if(this.isCorrect) {
      return 'Correct!';
    } else if(!this.isCorrect) {
      return 'Incorrect!';
    }
  }
}

module.exports = Turn;