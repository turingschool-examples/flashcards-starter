const prototypeData = require('./data')

class Deck {
    constructor() {
        this.cards = []
        prototypeData.forEach(card => {
            this.cards.push(card)
        })
    }
    countCards() {
        return this.cards.length
    }
}
module.exports = Deck