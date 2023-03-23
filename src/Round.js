const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns];
    return this.currentCard
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    this.turns++;
    this.returnCurrentCard();
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.card.id)
      return turn.giveFeedback();
    } else {
      return turn.giveFeedback();
    }
  }
  calculatePercentCorrect() {
   return 100 - Math.ceil((this.incorrectGuesses.length/this.turns) * 100)
  }
  endRound() {
    let percent = this.calculatePercentCorrect();
    console.log(`** Round over! ** You answered ${percent}% of the questions correctly!`);
    return `** Round over! ** You answered ${percent}% of the questions correctly!`;
  }
};

module.exports = Round;