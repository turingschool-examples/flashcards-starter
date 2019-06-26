const Turn = require('../src/Turn')

class Round {
  constructor (deck, game) {
    this.deck = deck || [];
    this.game = game;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard(card) {
    return this.deck.cardDeck[this.turns]
  }

  takeTurn(playerGuess){
    const turn = this.createNewTurn(playerGuess);
    if (playerGuess !== this.deck.cardDeck[this.turns].correctAnswer){
        this.incorrectGuesses.push(this.deck.cardDeck[this.turns].id);
    }
    this.turnCounter();
    return turn.giveFeedback(playerGuess);
  }

  createNewTurn(playerGuess) {
    return new Turn(playerGuess, this.returnCurrentCard())
  }

  turnCounter() {
    this.turns++;
  }

  calculatePercent() {
    return Math.round((100 - this.incorrectGuesses.length)/this.turns)
  }
}

module.exports = Round