const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Round {
  constructor(currentDeck) {
    this.currentDeck = currentDeck;
    this.currentCard = 0;
    this.turnCount = 0;
    this.playerScore = 0;
  }
  returnCurrentCard() {
    return this.currentDeck.cards[this.currentCard];
  }
  takeTurn(answerValue) {
    ++ this.turnCount;
    ++ this.currentCard
    if(answerValue) {
      ++ this.playerScore;
    }
  }
  calculatePercentCorrect() {
    return ((this.playerScore / this.currentDeck.cards.length) * 100);
  }
  endRound() {
    const score = this.calculatePercentCorrect();
    this.turnCount = 0;
    this.currentCard = this.currentDeck[0];
    this.playerScore = 0;
    return "**Round over!** You answered " + score + "% of the questions correctly!"
  }
}

module.exports = Round;
