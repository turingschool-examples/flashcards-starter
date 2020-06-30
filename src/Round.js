const Turn = require('./Turn');
class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.currentCard = deck !== undefined ? deck.cards[this.turns] : undefined; 
    this.mostRecentEvaluation = undefined; //get rid of this
    this.currentTurn; //get rid of this
    this.incorrectGuesses = [];
  }

  returnCurrentCard = () => {
    return this.currentCard
  } 
  takeTurn = (response) => {
    this.turns += 1;
    this.currentTurn = new Turn(response, this.currentCard);
    this.mostRecentEvaluation = this.currentCard !== undefined ? this.currentTurn.evaluateGuess() : () => {};
    this.currentTurn.evaluateGuess() ? () => {} : this.incorrectQuestions(this.currentCard);
    const result = this.currentCard !== undefined ? this.currentTurn.giveFeedback() : undefined;
    this.currentCard = this.deck.cards[this.turns];
    return result
  }
  incorrectQuestions(currentCard) {
    this.incorrectGuesses.push(currentCard.id);
  }
  calculatePercentCorrect = () => {
    return Math.floor((this.deck.cards.length - this.incorrectGuesses.length) / this.deck.cards.length * 100);
  }
  endRound = () => {
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;