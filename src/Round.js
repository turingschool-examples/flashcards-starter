class Round {
  constructor(cardDeck) {
    this.roundDeck = cardDeck;
    this.turnCount = 0;
    this.incorrect = [];
  }

  returnCurrentCard() {
    const current = this.roundDeck['deck'].shift();
    return current
  }

  takeTurn() {
    this.turnCount++
  }

};




module.exports = Round;
