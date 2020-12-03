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
  takeTurn(guess) {
    this.turnsCount++;
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard)
    if(turn.evaluateGuess() === false) {
       this.incorrectGuesses.push(currentCard.id);
    } else {
      this.deck.cards.shift();
      this.returnCurrentCard();
    }
    return(turn.giveFeedback());
  }
  calculatePercentCorrect() {
    return (this.incorrectGuesses / this.turnsCount) * 100; 
  }
}

module.exports = Round;
