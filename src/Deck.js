class Deck{
    constructor(decks){
        this.decks = decks
    }
    countCards(){
        
        return this.decks.length
    }
}

module.exports = Deck;