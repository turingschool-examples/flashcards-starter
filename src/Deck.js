class Deck {
    constructor(cards) {
        this.cards = cards
    }

    countCards() {
        // console.log(this.cards)
        let cardAmount = this.cards.reduce((amount, card) => {
            if(card){
               amount ++
            //    console.log(amount)
               return amount
            }
        }, 0)
        return cardAmount
    }
}


module.exports = Deck;
