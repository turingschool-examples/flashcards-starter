const Turn = require('../src/Turn');
class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cardsArray[0];
    this.turns = 0;
    this.turn = {};
    this.incorrectGuesses = [];
    this.correctGuesses = 0;
  }
  returnCurrentCard() {
    return this.currentCard
    }
  takeTurn(guess) {
    const card = this.currentCard;
    this.turn = new Turn(guess, card);
    if (!this.turn.evaluateGuess()) {
      this.incorrectGuesses.push(card.id)
    } else {
      this.correctGuesses ++;
    }
    this.turns ++ ;
    this.deck.cardsArray.shift();
    this.currentCard = this.deck.cardsArray[0];
    return this.turn.giveFeedback();
  }
  calculatePercentCorrect() {
    let correctPercent = (this.correctGuesses /  (this.incorrectGuesses.length + this.correctGuesses)) * 100;
    return correctPercent;
  }
  endRound() {
    const percent = this.calculatePercentCorrect();
    const endMsg = `**Round over!** You answered ${percent}% of the questions correctly!`;
    return endMsg;
  }
}
module.exports = Round;
