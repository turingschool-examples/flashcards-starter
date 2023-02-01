class Deck {
  constructor(cardsArray){
    this.stack = cardsArray
  }
  countCards(){
    return this.stack.length
  }
}

module.exports = Deck