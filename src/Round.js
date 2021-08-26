const Card = require('./Card');
const Game = require('./Game');
const Turn = require('./Turn');
const Deck = require('./Deck');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    let deck = new Deck();
    let currentCard = this.turn;
      return this.deck.currentDeck[currentCard];
  }

  takeTurn(name, currentCard) {
    this.turn++
    let newTurn = new Turn(name, currentCard);
    newTurn.evaluateGuess();
    newTurn.giveFeedback();
    if (newTurn.result === false) {
      this.incorrectGuesses.push(newTurn.cardInPlay.id);
    }
  };

  calculatePercentCorrect() {
    let correctGuesses = this.turn - this.incorrectGuesses.length;
    return `${correctGuesses / this.turn}%`;
  };

  endRound() {
return `** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`
  }
};

module.exports = Round;
