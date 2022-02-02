class Round {
  constructor(currentCard, turns) {
    this.currentCard = currentCard
    this.turns = 0
  }
  takeTurn() {
    this.turns++
  }
  returnCurrentCard() {
    console.log(this.currentCard)
    return this.currentCard
  }
}

module.exports = Round;
