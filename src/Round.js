class Round {
  constructor(currentCard, turns) {
    this.currentCard = currentCard
    this.turns = 0
  }
  takeTurn() {
    this.turns++
  }
  returnCurrentCard() {
    return this.currentCard
  }
}

module.exports = Round;
