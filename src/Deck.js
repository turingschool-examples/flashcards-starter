class Deck{
    constructor(decks){
        this.decks = decks
    }
    countCards(){
        console.log(this.decks.length)
        return this.decks.length
    }
}

module.exports = Deck;