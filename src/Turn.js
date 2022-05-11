class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.currentCard = card;
  };

  returnGuess() {
    return this.guess;
  };

  returnCard() {
    return this.currentCard;
  };

  evaluateGuess(guess) {
    var correctAnswer = this.currentCard.correctAnswer;
    var guess = this.guess;

    if (guess === correctAnswer) {
      this.giveFeedback(true);
      return true;
    } else if (guess !== correctAnswer) {
      this.giveFeedback(false);
      return false;
    };
  };
  
  giveFeedback(feedback) {
    if (feedback === true) {
      return 'correct!'
    } else if (feedback === false) {
      return 'incorrect!'
    }
  };
};

module.exports = Turn;
