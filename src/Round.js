const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cardsInDeck; 
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    this.turns++;

    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    this.currentCard = this.deck[this.turns];
    return turn.giveFeedback();
  }
  calculatePercentageCorrect() {
    let percentage =  (100 - ((this.incorrectGuesses.length / this.turns) * 100));
    return Math.round(percentage);
  }
  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`)
    return (`** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;