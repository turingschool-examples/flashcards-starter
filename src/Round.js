const Turn = require('../src/Turn');
class Round {
    constructor(deck) {
        this.deck = deck;
        this.turnCount = 0;
        this.incorrectGuess = [];
        this.isCorrect = true;
    }
    returnCurrentCard() {
        return this.deck.cards[0]


    }
    takeTurn(guess) {
        this.turnCount += 1;

        const turn = new Turn(guess, this.returnCurrentCard())
        const previousCard = this.deck.cards.shift();
        this.deck.cards.push(previousCard)
    
        if (turn.evaluateGuess() === false) {
            this.incorrectGuess.push(this.deck.cards.id)
            this.isCorrect = false;
            return turn.giveFeedback();
        } else {
            //could create a correct answer array to push to, to mitigate having to find the reciprocal given the current config
            return turn.giveFeedback()
        }
    }
    calculatePercentCorrect(){
        return (this.incorrectGuess.length / this.turnCount).toFixed(2)
    }
}

module.exports = Round