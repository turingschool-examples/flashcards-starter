const Turn = require("../src/Turn.js");
const Deck = require("../src/Deck.js");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentTurn = null;
  };
  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess) {
    this.currentTurn = new Turn(guess, this.currentCard);
    this.updateTurns();
    this.recordGuess();
    this.returnFeedback();
    this.updateCard();
  };
  updateTurns() {
    this.turns++;
    return this.turns;
  };
  recordGuess() {
    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    };
  };
  returnFeedback() {
    this.currentTurn.giveFeedback();
  };
  updateCard() {
    this.currentCard = this.deck.cards[this.turns];
  };
  calculatePercentCorrect() {
    let totalCorrect = this.deck.cards.length - this.incorrectGuesses.length;
    let percentCorrect = (totalCorrect / this.deck.cards.length) * 100;
    return percentCorrect;
  };
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect}% of the questions correctly!`);
  };
};


module.exports = Round;
