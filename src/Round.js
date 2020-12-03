const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnsCount = 0;
    this.incorrectGuesses = [];
    this.currentCard;
  }
  returnCurrentCard() {
    this.currentCard = this.deck.cards[0];
    return this.currentCard;
  }
  endRound() {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
  }
  takeTurn(guess) {
    this.turnsCount++;
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard)
    if(turn.evaluateGuess() && this.deck.cards.length < 1) {
      this.endRound();
      this.deck.cards.shift();
    } else if(turn.evaluateGuess()) {
       this.deck.cards.shift();
    } else {
       this.incorrectGuesses.push(currentCard.id);
       this.deck.cards.shift();
    }
    return(turn.giveFeedback());
  }
  calculatePercentCorrect() {
    return ((this.turnsCount - this.incorrectGuesses.length) / this.turnsCount) * 100;
  }
}

module.exports = Round;
