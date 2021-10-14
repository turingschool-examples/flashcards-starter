class Deck {
  constructor(cardDeck){
    this.cardDeck = cardDeck;
  }
  countCards(){
    return this.cardDeck.length;
  }

}

module.exports = Deck;
