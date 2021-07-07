class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(turn) {
    this.turns++;
    if(!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn)
    }
    let nextCard = this.deck.cards.indexOf(this.currentCard) + 1;
    this.currentCard = this.deck.cards[nextCard];
    return turn.giveFeedback();


  }

}

module.exports = Round;
