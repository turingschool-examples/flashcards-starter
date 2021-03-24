const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

class Round {
  constructor(currentDeck) {
    this.currentDeck = currentDeck;
    this.currentCard = 0;
    this.turnCount = 0;
    this.playerScore = 0;
    this.currentTurn = null;
  }
  returnCurrentCard() {
    if(this.currentCard >= this.currentDeck.cards.length) {
      return null;
    }
    return this.currentDeck.cards[this.currentCard];
  }
  takeTurn(answerValue) {
    this.currentTurn = new Turn(answerValue, this.returnCurrentCard());
    this.turnCount++;
    this.currentCard++;
    const validatedAnswer = this.currentTurn.evaluateGuess();
    if(validatedAnswer) {
      this.playerScore++;
    }
    return this.currentTurn.giveFeedback();
  }
  calculatePercentCorrect() {
    return ((this.playerScore / this.currentDeck.cards.length) * 100);
  }
  endRound(restartGame) {
    const score = this.calculatePercentCorrect();
    this.turnCount = 0;
    this.currentCard = this.currentDeck[0];
    this.playerScore = 0;
    console.log("**Round over!** You answered " + score + "% of the questions correctly!");
    if(score < 90) {
      console.log("**You scored too low, try again and try to beat 90%!");
      restartGame();
    }
  }
}

module.exports = Round;
