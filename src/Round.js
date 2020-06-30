const Turn = require('./Turn');
class Round {
  constructor(deck) {
    this.turns = 0;
    this.currentCard = deck !== undefined ? deck.cards[this.turns] : undefined; 
    this.mostRecentEvaluation = undefined;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
  }

  returnCurrentCard = () => {
    return this.currentCard
  } 
  takeTurn = (response) => {
    this.turns += 1;
    const turn = new Turn(response, this.currentCard);
    this.mostRecentEvaluation = this.currentCard !== undefined ? turn.evaluateGuess() : () => {};
    this.storeGuess(response);
    const result = this.currentCard !== undefined ? turn.giveFeedback() : undefined;
    return result
  }
  storeGuess(guess) {
    this.mostRecentEvaluation ? this.correctGuesses.push(guess) : this.incorrectGuesses.push(guess);
  }
}

module.exports = Round;