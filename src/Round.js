class Round {
    constructor(deck){
        this.deck = deck
        this.turns = 0
        this.incorrectGuesses = []
        

        //object that takes in responses and records these guesses as correct or incorrect

    }
    returnCurrentCard() {
        //returns the current card being played
        return this.deck.cards[this.turns]
    }
    takeTurn() {
        this.turns++
        //updates the turns count,
        //evaluates guesses,
        //gives feedback,
        //stores id's of incorrect guesses
    }
    calculatePercentCorrect() {
        //calculates and returns the percentage of correct guesses
    }
    endRound() {
        //prints the following to console 
    }
}

module.exports = Round;