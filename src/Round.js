class Round {
  constructor(deck) {
    this.deck = deck
    this.turns = 0;
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns]
    
  }
}






module.exports = Round;