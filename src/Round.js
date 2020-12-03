class Round {
  constructor(deck) {
    this.deck = deck;
    this.turnsCount = 0;
    this.incorrectGuesses = [];
    this.currentCard;
  }
  returnCurrentCard() {
    this.currentCard = this.deck.cards[0];
    return this.currentCard;
  }
  takeTurn(turn) {
    this.turnsCount++;
    if(turn.evaluateGuess() === false) {
       this.incorrectGuesses.push(this.currentCard.id);
    };
    return turn.giveFeedback();

  }
}

module.exports = Round;
