 class Deck {
  constructor(cards) {
    this.set = cards
  }
  
  countCards(){
   return this.set.length
  }
}

module.exports = Deck