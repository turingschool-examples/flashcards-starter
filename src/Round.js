class Round {
  constructor(deck, turns = 0, incorrectGuesses = []) {
    this.deck = deck;
    this.turns = turns;
    this.incorrectGuesses = incorrectGuesses;
  }
  returnCurrentCard() {
      return this.deck.cards[this.turns];
    }
  }
