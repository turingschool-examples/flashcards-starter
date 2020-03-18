class Round {
  constructor(deck) {
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn() {
    //add functionality; should incorporate turn values
  }
}


module.exports = Round;
