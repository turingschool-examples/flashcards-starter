class Deck {
  constructor(cardArray){
    this.cardArray = cardArray;
  }

  countCards() {
    return this.cardArray.length;
  }
}



module.exports = Deck;
