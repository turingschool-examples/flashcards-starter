const Turn = require('../src/Turn');
// problem Cards arent actually going into deck
class Round {
  constructor(deck){
    this.deck = deck;
    this.turnCount = 0;
    this.currentCard = this.returnCurrentCard();
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turnCount];
  }

  takeTurn(guess) {
    let result = new Turn(guess, this.returnCurrentCard());
    if(!result.evaluateGuess()) {
      this.incorrectGuesses.push(result.card.id);
    }
    this.turnCount++;
    return result;
  }

  calculatePercentCorrect() {
    let result = ((this.deck.cards.length - this.incorrectGuesses.length)/(this.deck.cards.length))*100;
    result = Math.trunc(result);
    return result;
  }

  endRound() {
    let result = this.calculatePercentCorrect();
    return `** Round over! ** You answered ${result}% of the questions correctly!`;
  }
}

module.exports = Round;
