class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    // returns the current card being played
    return this.deck.cards // find current card
  }

  takeTurn() {
    // instantiate new Turn
    let turn = new Turn();
    // updates turns count
    this.turns ++;
    // evaluates guesses

    // gives feedback
    turn.giveFeedback();
    // stores ids of incorrect guesses

  }
}

module.exports = Round;
