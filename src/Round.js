const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');

class Round {
  constructor(deck) {
    this.deck = deck
    this.currentCard = deck.cards[0];
    this.turnCount = 0;
    this.incorrectGuessIds = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turnCount ++
    let turn = new Turn(guess, this.currentCard);
    turn.evaluateGuess();
    if (!turn.isCorrect) {
      this.incorrectGuessIds.push(this.currentCard.id);
    }
    // this.currentCard = deck.cards[1]
    return turn.giveFeedback()
  }

}


module.exports = Round;