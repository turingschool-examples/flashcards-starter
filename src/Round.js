const Turn = require('../src/Turn');
class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cardsArray[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard
    }
  takeTurn(guess) {
    this.turns ++ ;
    const card = this.currentCard;
    const turn = new Turn(guess, card);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(card.id)
    } else {
      this.correctGuesses.push(card.id)
    }
    // this.currentCard = this.deck.cardsArray[this.turns];
    this.returnCurrentCard();
    return turn.giveFeedback()
  }
  calculatePercentCorrect() {
    let percent = this.correctGuesses.length +  this.correctGuesses.length % this.turns;
    return percent;
  }
  endRound() {
    // console.log(`** Round over! ** You answered ${this.correctAnswer} of the questions correctly!`);
  }
}
module.exports = Round;
