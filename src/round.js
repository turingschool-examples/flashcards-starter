var Turn = require('../src/turn');
// var Deck = require('../src/deck');

class Round {
  constructor(cardDeck) {
    this.deck = cardDeck;
    this.currentCard = cardDeck.cardsInDeck[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurns(userGuess, card) {
    card = this.returnCurrentCard();
    let turn = new Turn(userGuess, card);
    this.turns += 1;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id);
    }

    if (this.turns === this.deck.cardsInDeck.length + 1) {
      this.endRound();
    }

    if (this.turns <= this.deck.cardsInDeck.length) {
      this.currentCard = this.deck.cardsInDeck[this.turns];
    }

    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let numberCorrect = this.deck.cardsInDeck.length - this.incorrectGuesses.length;
    return `${Math.floor(numberCorrect / this.deck.cardsInDeck.length * 100)}%`
  }

  endRound(cardDeck) {
    console.log(`**Round over!** You answered ${this.calculatePercentCorrect(cardDeck)} of the questions correctly! Press <ctrl + c> to exit.`)
  }
}

module.exports = Round;
