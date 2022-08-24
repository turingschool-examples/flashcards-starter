class Round {
  constructor(currentDeck) {
    this.deck = currentDeck;
    this.turn = 0
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    const currentTurn = new Turn(guess, this.deck[0])
    console.log(currentTurn.guess)
  }
}

module.exports = Round;


//Take turn has guess as parameter
// 