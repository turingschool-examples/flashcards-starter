const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

// const card1 = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
// const card2 = new Card(2, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
// const card3 = new Card(3, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
// const deck = new Deck([card1, card2, card3]);

class Round {
  constructor(deckDeck = [0], turns = 0) {
    this.deckDeck = deckDeck;
    this.turns = turns;
    this.currentCard = this.deckDeck.cardDeck[this.turns];
    this.incorrectGuesses = [];
    // this.guesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guessInput) {
    const turn = new Turn(guessInput, this.currentCard);
    this.turns++;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    // this.guesses.push(guess);
    let output = turn.giveFeedback();
    this.currentCard = this.deckDeck.cardDeck[this.turns];
    return output;

  }

  calculatePercentCorrect() {
    return Math.round(((this.deckDeck.cardDeck.length - this.incorrectGuesses.length) / this.deckDeck.cardDeck.length) * 100);
  };

  endRound() {
    console.log('** Round over! ** You answered <>% of the questions correctly!');
    return '** Round over! ** You answered <>% of the questions correctly!';
  };

}

module.exports = Round;
