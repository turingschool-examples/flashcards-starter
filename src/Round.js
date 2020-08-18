class Round {
  constructor(deck, turn) {
    this.deck = deck.deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.returnCurrentCard = () => {
      return this.deck[0];
    }
    this.takeTurn = () => {
      
    }
  }
}
module.exports = Round;