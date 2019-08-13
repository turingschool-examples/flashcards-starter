class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }

  takeTurn(turn) {
    let currentCard = this.returnCurrentCard();
    this.turnCount++;
    if(turn.evaluateGuess() === false) { this.incorrectGuesses.push(currentCard.id);
    }
  }

  returnCurrentCard() {
    return this.deck.cards[this.turnCount];
  }
}

module.exports = Round;
