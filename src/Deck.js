class Deck {
    constructor(cards) {
        this.cards = cards
    }

    countCards() {
        console.log(this.cards)
        this.cards.reduce((amount, card) => {
            if(card){
               amount ++
               console.log(amount)
               return amount
            }
        }, 0)
    }
}


module.exports = Deck;
