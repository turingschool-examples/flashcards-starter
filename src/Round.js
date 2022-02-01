class Round {
  constructor(deck) {
    this.deck = deck
    this.turnCount = 0
  }

  returnCurrentCard() {
    console.log(this.deck.deck[0])
    return this.deck.deck[0]
  }

  takeTurn(){
    this.turnCount ++
  }
}

// module.exports = Turn;
module.exports = Round;
// module.exports = Card;
