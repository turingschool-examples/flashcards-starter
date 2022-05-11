const Turn = require('../src/Turn');
// problem Cards arent actually going into deck
class Round {
  constructor(deck){
    this.deck = deck;
    this.turnCount = 0;
    this.currentCard = this.deck.cards[this.turnCount];
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turnCount++;
    let result = new Turn(guess, this.returnCurrentCard());
    if(!result.evaluateGuess()) {
      this.incorrectGuesses.push(result.card.id);
    }
    return result;
  }
}

module.exports = Round;
