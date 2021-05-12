class Round {
  constructor(deck) {
    this.deck = deck.deck
    this.currentCard; 
    this.turns = 0
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    this.currentCard = this.deck[0]    
  }
}

module.exports = Round