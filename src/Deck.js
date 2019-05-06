class Deck {
  constructor(cardsArray){
    this.cardsArray = cardsArray || []
  }
  countCards(){
    return cardsArray.length
  }
}

 module.exports = Deck;