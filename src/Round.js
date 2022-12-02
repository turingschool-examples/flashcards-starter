const Turn = require('./Turn');
class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.correctGuesses = [];
    this.incorrectGuesses = [];
    this.startTime = undefined;
    this.endTime = undefined;
    this.roundDuration = undefined;
  };

  returnCurrentCard() {
    if (this.currentCard === undefined) {
      return false;
    } else {
      return this.currentCard;
    }
  };

  takeTurn(guess) {
    let newTurn = new Turn(guess, this.currentCard);
    if (newTurn.evaluateGuess()) {
      this.correctGuesses.push(this.currentCard.id);
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
    return newTurn.giveFeedback();
  };

  calculatePercentCorrect() {
    return this.correctGuesses.length / (this.correctGuesses.length + this.incorrectGuesses.length);
  };

  endRound() {
    let percentCorrect = this.calculatePercentCorrect().toFixed(2) * 100;
    let stopTimer = Date.now().toString();
    this.endTime = Number(stopTimer);
    this.roundDuration = Math.round((this.endTime - this.startTime) / 1000);
    if (this.roundDuration < 60) {
      console.log(`** Round over! ** You answered ${percentCorrect}% of the questions correctly! Total round duration: ${this.roundDuration} seconds`);
      return `** Round over! ** You answered ${percentCorrect}% of the questions correctly! Total round duration: ${this.roundDuration} seconds`;
    } else {
      let secondsLeftOver = (this.roundDuration % 60);
      let minutes = ((this.roundDuration / 60).toString()).charAt(0);
      console.log(`** Round over! ** You answered ${percentCorrect}% of the questions correctly! Total round duration: ${minutes} minutes and ${secondsLeftOver} seconds`);
      return `** Round over! ** You answered ${percentCorrect}% of the questions correctly! Total round duration: ${minutes} minutes and ${secondsLeftOver} seconds`;
    }
  };
};

module.exports = Round;