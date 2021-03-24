class Round {
  constructor(deck){
    this.deck = deck;
    this.currentCard = deck[0];
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    return turn.evaluateGuess();
  }
}

module.exports = Round;
