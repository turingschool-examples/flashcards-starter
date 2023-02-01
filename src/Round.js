const Turn = require("./Turn")
const Deck = require("./Deck")

class Round{
    constructor(cards){
        this.deck= new Deck(cards)
        this.currentCard = this.deck.cards[0]
    }

    returnCurrentCard(){
        console.log(this.currentCard)
       return this.currentCard
    }
}

module.exports = Round