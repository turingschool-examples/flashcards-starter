class Deck{
  constructor(inputCards){
      this.cards = inputCards;
  }
  countCards(){
    return this.cards.length;
  }
}

module.exports = Deck;
