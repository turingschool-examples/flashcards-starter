const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentTurnIteration = 0;
    this.answeredCardIds = {
      correct: [],
      incorrect: [],
    }
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.getCurrentCard());
    this.storeTurnResult(turn); 
    this.goToNextTurn(); 
    return turn.getFeedback();
  } 

  storeTurnResult(turn) {
    const cardId = turn.currentCard.id;
    if (turn.isCorrectlyAnswered()) {
      this.answeredCardIds.correct.push(cardId);
    } else {
      this.answeredCardIds.incorrect.push(cardId);
    }
  }

  goToNextTurn() {
    this.currentTurnIteration++;
  }

  getCurrentCard() {
    return this.deck.cards[this.currentTurnIteration];
  }

  getCorrectPercentage() {
    const totalCorrectGuesses = this.answeredCardIds.correct.length;
    const totalQuestions = this.currentTurnIteration;
    const result = (totalCorrectGuesses/ totalQuestions) * 100;

    return Number.parseFloat(result.toFixed(2));
  }

  endRound() {
    if (this.currentTurnIteration === this.deck.countCards()) {
      const grade = this.getCorrectPercentage();
  
      return `**Round over!**You answered ${grade} of the questions correctly!`
    }
  }
}

module.exports = Round;