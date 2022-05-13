const Turn = require('../src/Turn');
class Round {
    constructor(deck) {
        this.deck = deck;
        this.turnCount = 0;
        this.correctGuess = [];
        this.incorrectGuess = [];
        this.isCorrect = true;
    }
    returnCurrentCard() {
        // this.deck.cards[this.turnCount];
       if (this.deck.cards[0] === undefined) {
           return false
       } else {
        return this.deck.cards[0]
    }
}
    takeTurn(guess) {
        this.turnCount += 1;

        const turn = new Turn(guess, this.returnCurrentCard())
        this.deck.cards.shift();
        // this.deck.cards.push(previousCard)


        if (turn.evaluateGuess() === false) {
            this.incorrectGuess.push(this.deck.cards.id)
            this.isCorrect = false;
           
            return turn.giveFeedback();
        } else {
            this.correctGuess.push(this.deck.cards.id)
            //could create a correct answer array to push to, to mitigate having to find the reciprocal given the current config
            return turn.giveFeedback()
        }
    }
    calculatePercentCorrect(){
        if (this.correctGuess.length === 0) return 0;
        if(this.turnCount / this.correctGuess.length === 1) return 100;
        return (this.correctGuess.length / this.turnCount).toFixed(2) * 100;
    }
    endRound() {
        console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
        return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
    }
}

   
module.exports = Round