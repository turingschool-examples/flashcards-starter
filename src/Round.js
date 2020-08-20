const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnCount = 0;
    this.currentCard = this.deck.cardsInDeck[0];
  }
  returnCurrentCard() {
    return this.currentCard
  }
  takeTurn(guess) {
    let newTurn = new Turn()
    this.turnCount++
    this.deck.cardsInDeck.shift()
    this.currentCard = this.deck.cardsInDeck[0];
  }
}






//shift the card out of the deck!!








module.exports = Round
