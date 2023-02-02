class Round {
    constructor(deck) {
        this.deck = deck;
        this.currentCard = deck[0];
        this.turns = [];
        this.correctGuess = [];
        this.incorrectGuess = [];
    }
    
    returnCurrentcard(){
        return this.currentCard

    }
    takeTurn() {
        this.turns += 1;
        if(guess === this.currentCard.correctAnswer) {
            this.correctGuess += 1;
            return 'this is correct!'
        } else {
            this.incorrectGuess += 1;
           return 'this is incorrect!'
        }
    }
    calculatePercentCorrect() {

    }
    // endRound() {
    //     console.log(`you answered ${}% of the questions correctly`)
    // }

}

module.exports = Round