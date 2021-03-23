class Round {
  constructor(deck){
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard(){
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    this.turns += 1;
  }
}

module .exports = Round;
