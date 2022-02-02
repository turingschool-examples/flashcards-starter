class Round {
  constructor(currentCard, turns) {
    this.currentCard = currentCard
    this.turns = 0
  }
  takeTurn() {
    this.turns++
  }
}

module.exports = Round;
