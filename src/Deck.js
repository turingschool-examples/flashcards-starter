class Deck {
  constructor({count = []}) {
    this.count = count;
  }
  countCards() {
    return this.count.length
  }
}

module.exports = Deck;
